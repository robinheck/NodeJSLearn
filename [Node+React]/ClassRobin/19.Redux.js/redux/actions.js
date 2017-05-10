let actions = { 
	addTodo:(text) => {
		return ({
			type:'ADD_TODO',
			text:text})
	},
	toggleTodo:(id) => {
		return({
			type:'TOGGLE_TODO',
			id:id,
	  })
	},
	FilterTodo:(filter) => {
		return({
    	type:'SET_VISBILITY_FILTER',
	    filter:filter		
		})
	},
	 con:() => {
        return (dispatch, getState) => {
            console.log('現在的Store是');
            console.log(getState());
        }
  }

}

export default actions

