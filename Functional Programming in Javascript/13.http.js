//++Exercise 34: HTTP requests

//Events aren't the only source of asynchronous data in an application. There's also HTTP requests. Most of the time HTTP requests are exposed via a callback-based API. To receive data asynchronously from a callback-based API, the client typically passes a success and error handler to the function. When the asynchronous operation completes, the appropriate handler is called with the data. In this exercise we'll use jQuery's getJSON api to asynchronously retrieve data.

function($) {
	$.getJSON(
		"http://api-global.netflix.com/queue",
		{
			success: function(json) {
				alert("Data has arrived.");
			},
			error: function(ex) {
				alert("There was an error.")
			}
		});
}
		


//++Exercise 35: Sequencing HTTP requests with callbacks
	//Let's say that we're writing the startup flow for a web application. On startup, the application must perform the following operations:
	// 1.Download the URL prefix to use for all subsequent AJAX calls. 
	//	 This URL prefix will vary based on what AB test the user is enrolled in.
	// 2.Use the url prefix to do the following actions in parallel:
	//	>Retrieve a movie list array
	//	>Retrieve configuration information and...
	//		make a follow up call for an instant queue list 
	//		if the config property "showInstantQueue" is truthy
	// 3.If an instant queue list was retrieved, append it to the end of movie list.
	// 4.If all operations were successful then display the movie lists after the window loads.
	//   Otherwise inform the user that there was a connectivity error.
//以下不是常用的語法,看看就好
function(window, $, showMovieLists, showError) {
	var error,configDone,movieLists,queueList,windowLoaded,outputDisplayed;
	var	errorHandler = function() {
			// Otherwise show the error.
			error = "There was a connectivity error";
			// We may be ready to display out
			tryToDisplayOutput();
		}
	var	tryToDisplayOutput = function() {
			if (outputDisplayed) {return;}
			if (windowLoaded) {
				if (configDone && movieLists !== undefined) {
					if (queueList !== undefined) {
						movieLists.push(queueList);
					}
					outputDisplayed = true;
					showMovieLists(JSON.stringify(movieLists));
				}
				else if (error) {
					outputDisplayed = true;
					showError(error);
				}
			}
		}
	var	windowLoadHandler = function() {
			windowLoaded = true;
			// Remember to unsubscribe from events
			window.removeEventListener("load", windowLoadHandler);
			// This may be the last task we're waiting on, so try and display output.
			tryToDisplayOutput();
		};

	// Register for the load event
	window.addEventListener("load", windowLoadHandler);
	// Request the service url prefix for the users AB test
	$.getJSON(
		"http://api-global.netflix.com/abTestInformation",
		{
			success: function(abTestInformation) {
				// Request the member's config information to determine whether their instant
				// queue should be displayed.
				$.getJSON(
					"http://api-global.netflix.com/" + abTestInformation.urlPrefix + "/config",
					{
						success: function(config) {
							// Parallel retrieval of movie list could've failed,
							// in which case we don't want to issue this call.
							if (!error) {
								// If we're supposed to
								if (config.showInstantQueue) {
									$.getJSON(
										"http://api-global.netflix.com/" + abTestInformation.urlPrefix + "/queue",
										{
											success: function(queueMessage) {
												queueList = queueMessage.list;

												configDone = true;
												tryToDisplayOutput();
											},
											error: errorHandler
										});
								}
								else {
									configDone = true;
									tryToDisplayOutput();
								}
							}
						},
						error: errorHandler
					});
				// Retrieve the movie list
				$.getJSON(
					"http://api-global.netflix.com/" + abTestInformation.urlPrefix + "/movieLists",
					{
						success: function(movieListMessage) {
							movieLists = movieListMessage.list;
							tryToDisplayOutput();
						},
						error: errorHandler
					});
			},
			error: errorHandler
		});
}


//It's fair to say that sequencing HTTP requests with callbacks is very hard. 
//In order to perform two tasks in parallel, we have to introduce a variable to track the status of each task. 
//Every time one of the parallel tasks completes it must check whether its sibling(兄弟) task has also completed. 
//If both have completed, only then can we move forward. 
//In the example above, every time a task is finished the tryToDisplayOutput() function is called to check if the program was ready to display output. 
//This function checks the status of all tasks and displays the output if possible.

//With a callback-based API, asynchronous error handling is also very complicated. 
//In synchronous programs, a unit of work is cancelled when an exception is thrown. 
//By contrast, in our program we had to explicitly track whether an error occurred in parallel to prevent an unnecessary call for the instant queue. Javascript provides us with special support for synchronous error handling with the keywords try/catch/throw. Unfortunately no such support is available for asynchronous programs.

//The Observable interface is a much more powerful way of working with asynchronous APIs than callbacks. We'll see that Observables can free us from having to track the status of tasks that are run in parallel, just as Observables free us from having to track Event Subscriptions. We'll also see that Observable gives us the same error propagation semantics in asynchronous programs that we expect in synchronous programs. Finally we'll learn that by converting callback-based APIs to Observables, we can query them along with Events to build much more expressive programs.