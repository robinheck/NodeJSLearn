// 執行起來的邏輯如下                        
// sharedDNA(Philibert Haverbeke(0,?)                     
//   sharedDNA(Emma de Milliano(0,?)                    
//     Sophia van Damme(null)                    
//     Petrus de Milliano(null)                    
//   sharedDNA(Emile Haverbeke,0,?)                   
//     sharedDNA(Maria Sturm,0,0)                  
//       Seraphina Spelier(null)                  
//       Charles Sturm(null)                  
//     sharedDNA(Carolus Haverbeke,?,?)                    
//       sharedDNA(Maria van Brussel,?,?)        
//         sharedDNA(Joanna de Causmaecker,0,0.03125)(return 0.015625)                
//           null              
//           sharedDNA(Bernardus de Causmaecker,0.0625,0)(return 0.03125)              
//             sharedDNA(Livina Haverbeke,0,1/8)(return 0.0625)            
//               Joanna de Pape          
//                 Petronella Wauters(null)        
//                 Vincent de Pape(null)        
//               sharedDNA(Daniel Haverbeke,0,1/4)(return 1/8)          
//                 Elisabeth Hercke        
//                   Margriet de Brabander(null)      
//                   Willem Hercke(null)      
//                 sharedDNA(Lieven Haverbeke,0,1/2)(return 1/4)        
//                   Anna van Hecke      
//                     Martijntken Beelaert(null)    
//                     Paschasius van Hecke(null)    
//                   Pieter Haverbeke      
//                     null    
//                     sharedDNA(Lieven van Haverbeke,0,1)(return 1/2)    
//                       Lievijne Jans  
//                         null
//                         null
//                       sharedDNA(Pauwels van Haverbeke,0,0)(return 1)  
//                         null
//                         sharedDNA(N. van Haverbeke (null)
//             sharedDNA(Lieven de Causmaecker,0,0)(return 0)            
//               Joanna Claes(null)          
//               Carel de Causmaecker(null)          
                        
//         sharedDNA(Jan Frans van Brussel                
//           null              
//           Jacobus Bernardus van Brussel              
//             Elisabeth Haverbeke            
//               sharedDNA(Maria de Rycke,0,0)          
//                 Laurentia van Vlaenderen(null)        
//                 Frederik de Rycke(null)        
//               Jan Haverbeke          
//                 Elisabeth Hercke        
//                   Margriet de Brabander(null)      
//                   Willem Hercke(null)      
//                 Lieven Haverbeke        
//                   sharedDNA(Anna van Hecke,0,0)      
//                     Martijntken Beelaert(null)    
//                     Paschasius van Hecke(null)    
//                   Pieter Haverbeke      
                        
                        
                        
//             Jan van Brussel            
                        
                        
                        
//       Carel Haverbeke                  
                        


//log
	reduceAncestors==return Philibert Haverbeke,mother:Emma de Milliano,father:Emile Haverbeke
	reduceAncestors==return Emma de Milliano,mother:Sophia van Damme,father:Petrus de Milliano
	reduceAncestors==null
	reduceAncestors==null
	1 fromMother:0,fromFather:0
	reduceAncestors==return Emile Haverbeke,mother:Maria Sturm,father:Carolus Haverbeke
	reduceAncestors==return Maria Sturm,mother:Seraphina Spelier,father:Charles Sturm
	reduceAncestors==null
	reduceAncestors==null
	2 fromMother:0,fromFather:0
	reduceAncestors==return Carolus Haverbeke,mother:Maria van Brussel,father:Carel Haverbeke
	reduceAncestors==return Maria van Brussel,mother:Joanna de Causmaecker,father:Jan Frans van Brussel
	reduceAncestors==return Joanna de Causmaecker,mother:null,father:Bernardus de Causmaecker
	reduceAncestors==null
	reduceAncestors==return Bernardus de Causmaecker,mother:Livina Haverbeke,father:Lieven de Causmaecker
	reduceAncestors==return Livina Haverbeke,mother:Joanna de Pape,father:Daniel Haverbeke
	reduceAncestors==return Joanna de Pape,mother:Petronella Wauters,father:Vincent de Pape
	reduceAncestors==null
	reduceAncestors==null
	3 fromMother:0,fromFather:0
	reduceAncestors==return Daniel Haverbeke,mother:Elisabeth Hercke,father:Lieven Haverbeke
	reduceAncestors==return Elisabeth Hercke,mother:Margriet de Brabander,father:Willem Hercke
	reduceAncestors==null
	reduceAncestors==null
	4 fromMother:0,fromFather:0
	reduceAncestors==return Lieven Haverbeke,mother:Anna van Hecke,father:Pieter Haverbeke
	reduceAncestors==return Anna van Hecke,mother:Martijntken Beelaert,father:Paschasius van Hecke
	reduceAncestors==null
	reduceAncestors==null
	5 fromMother:0,fromFather:0
	reduceAncestors==return Pieter Haverbeke,mother:null,father:Lieven van Haverbeke
	reduceAncestors==null
	reduceAncestors==return Lieven van Haverbeke,mother:Lievijne Jans,father:Pauwels van Haverbeke
	reduceAncestors==return Lievijne Jans,mother:null,father:null
	reduceAncestors==null
	reduceAncestors==null
	6 fromMother:0,fromFather:0
	reduceAncestors==return Pauwels van Haverbeke,mother:null,father:N. van Haverbeke
	reduceAncestors==null
	reduceAncestors==null
	Pauwels van Haverbeke
	7 fromMother:0,fromFather:1
	8 fromMother:0,fromFather:0.5
	9 fromMother:0,fromFather:0.25
	10 fromMother:0,fromFather:0.125
	11 fromMother:0,fromFather:0.0625
	reduceAncestors==return Lieven de Causmaecker,mother:Joanna Claes,father:Carel de Causmaecker
	reduceAncestors==null
	reduceAncestors==null
	12 fromMother:0,fromFather:0
	13 fromMother:0.03125,fromFather:0
	14 fromMother:0,fromFather:0.015625
	reduceAncestors==return Jan Frans van Brussel,mother:null,father:Jacobus Bernardus van Brussel
	reduceAncestors==null
	reduceAncestors==return Jacobus Bernardus van Brussel,mother:Elisabeth Haverbeke,father:Jan van Brussel
	reduceAncestors==return Elisabeth Haverbeke,mother:Maria de Rycke,father:Jan Haverbeke
	reduceAncestors==return Maria de Rycke,mother:Laurentia van Vlaenderen,father:Frederik de Rycke
	reduceAncestors==null
	reduceAncestors==null
	15 fromMother:0,fromFather:0
	reduceAncestors==return Jan Haverbeke,mother:Elisabeth Hercke,father:Lieven Haverbeke
	reduceAncestors==return Elisabeth Hercke,mother:Margriet de Brabander,father:Willem Hercke
	reduceAncestors==null
	reduceAncestors==null
	16 fromMother:0,fromFather:0
	reduceAncestors==return Lieven Haverbeke,mother:Anna van Hecke,father:Pieter Haverbeke
	reduceAncestors==return Anna van Hecke,mother:Martijntken Beelaert,father:Paschasius van Hecke
	reduceAncestors==null
	reduceAncestors==null
	17 fromMother:0,fromFather:0
	reduceAncestors==return Pieter Haverbeke,mother:null,father:Lieven van Haverbeke
	reduceAncestors==null
	reduceAncestors==return Lieven van Haverbeke,mother:Lievijne Jans,father:Pauwels van Haverbeke
	reduceAncestors==return Lievijne Jans,mother:null,father:null
	reduceAncestors==null
	reduceAncestors==null
	18 fromMother:0,fromFather:0
	reduceAncestors==return Pauwels van Haverbeke,mother:null,father:N. van Haverbeke
	reduceAncestors==null
	reduceAncestors==null
	Pauwels van Haverbeke
	19 fromMother:0,fromFather:1
	20 fromMother:0,fromFather:0.5
	21 fromMother:0,fromFather:0.25
	22 fromMother:0,fromFather:0.125
	23 fromMother:0,fromFather:0.0625
	reduceAncestors==return Jan van Brussel,mother:Joanna van Rooten,father:Jacobus van Brussel
	reduceAncestors==null
	reduceAncestors==null
	24 fromMother:0,fromFather:0
	25 fromMother:0.03125,fromFather:0
	26 fromMother:0,fromFather:0.015625
	27 fromMother:0.0078125,fromFather:0.0078125
	reduceAncestors==return Carel Haverbeke,mother:Livina Sierens,father:Pieter Antone Haverbeke
	reduceAncestors==return Livina Sierens,mother:Maria van Waes,father:Jan Sierens
	reduceAncestors==null
	reduceAncestors==null
	28 fromMother:0,fromFather:0
	reduceAncestors==return Pieter Antone Haverbeke,mother:Petronella de Decker,father:Jan Francies Haverbeke
	reduceAncestors==return Petronella de Decker,mother:Livina Haverbeke,father:Pieter de Decker
	reduceAncestors==return Livina Haverbeke,mother:Joanna de Pape,father:Daniel Haverbeke
	reduceAncestors==return Joanna de Pape,mother:Petronella Wauters,father:Vincent de Pape
	reduceAncestors==null
	reduceAncestors==null
	29 fromMother:0,fromFather:0
	reduceAncestors==return Daniel Haverbeke,mother:Elisabeth Hercke,father:Lieven Haverbeke
	reduceAncestors==return Elisabeth Hercke,mother:Margriet de Brabander,father:Willem Hercke
	reduceAncestors==null
	reduceAncestors==null
	30 fromMother:0,fromFather:0
	reduceAncestors==return Lieven Haverbeke,mother:Anna van Hecke,father:Pieter Haverbeke
	reduceAncestors==return Anna van Hecke,mother:Martijntken Beelaert,father:Paschasius van Hecke
	reduceAncestors==null
	reduceAncestors==null
	31 fromMother:0,fromFather:0
	reduceAncestors==return Pieter Haverbeke,mother:null,father:Lieven van Haverbeke
	reduceAncestors==null
	reduceAncestors==return Lieven van Haverbeke,mother:Lievijne Jans,father:Pauwels van Haverbeke
	reduceAncestors==return Lievijne Jans,mother:null,father:null
	reduceAncestors==null
	reduceAncestors==null
	32 fromMother:0,fromFather:0
	reduceAncestors==return Pauwels van Haverbeke,mother:null,father:N. van Haverbeke
	reduceAncestors==null
	reduceAncestors==null
	Pauwels van Haverbeke
	33 fromMother:0,fromFather:1
	34 fromMother:0,fromFather:0.5
	35 fromMother:0,fromFather:0.25
	36 fromMother:0,fromFather:0.125
	37 fromMother:0,fromFather:0.0625
	reduceAncestors==return Pieter de Decker,mother:Petronella van de Steene,father:Joos de Decker
	reduceAncestors==null
	reduceAncestors==null
	38 fromMother:0,fromFather:0
	39 fromMother:0.03125,fromFather:0
	reduceAncestors==return Jan Francies Haverbeke,mother:Livina de Vrieze,father:Pieter Bernard Haverbeke
	reduceAncestors==null
	reduceAncestors==return Pieter Bernard Haverbeke,mother:Petronella Wauters,father:Willem Haverbeke
	reduceAncestors==null
	reduceAncestors==return Willem Haverbeke,mother:Elisabeth Hercke,father:Lieven Haverbeke
	reduceAncestors==return Elisabeth Hercke,mother:Margriet de Brabander,father:Willem Hercke
	reduceAncestors==null
	reduceAncestors==null
	40 fromMother:0,fromFather:0
	reduceAncestors==return Lieven Haverbeke,mother:Anna van Hecke,father:Pieter Haverbeke
	reduceAncestors==return Anna van Hecke,mother:Martijntken Beelaert,father:Paschasius van Hecke
	reduceAncestors==null
	reduceAncestors==null
	41 fromMother:0,fromFather:0
	reduceAncestors==return Pieter Haverbeke,mother:null,father:Lieven van Haverbeke
	reduceAncestors==null
	reduceAncestors==return Lieven van Haverbeke,mother:Lievijne Jans,father:Pauwels van Haverbeke
	reduceAncestors==return Lievijne Jans,mother:null,father:null
	reduceAncestors==null
	reduceAncestors==null
	42 fromMother:0,fromFather:0
	reduceAncestors==return Pauwels van Haverbeke,mother:null,father:N. van Haverbeke
	reduceAncestors==null
	reduceAncestors==null
	Pauwels van Haverbeke
	43 fromMother:0,fromFather:1
	44 fromMother:0,fromFather:0.5
	45 fromMother:0,fromFather:0.25
	46 fromMother:0,fromFather:0.125
	47 fromMother:0,fromFather:0.0625
	48 fromMother:0,fromFather:0.03125
	49 fromMother:0.015625,fromFather:0.015625
	50 fromMother:0,fromFather:0.015625
	51 fromMother:0.0078125,fromFather:0.0078125
	52 fromMother:0,fromFather:0.0078125
	53 fromMother:0,fromFather:0.00390625
	value:0.001953125
	reduceAncestors==return Philibert Haverbeke,mother:Emma de Milliano,father:Emile Haverbeke
	reduceAncestors==return Emma de Milliano,mother:Sophia van Damme,father:Petrus de Milliano
	reduceAncestors==null
	reduceAncestors==null
	54 fromMother:0,fromFather:0
	reduceAncestors==return Emile Haverbeke,mother:Maria Sturm,father:Carolus Haverbeke
	reduceAncestors==return Maria Sturm,mother:Seraphina Spelier,father:Charles Sturm
	reduceAncestors==null
	reduceAncestors==null
	55 fromMother:0,fromFather:0
	reduceAncestors==return Carolus Haverbeke,mother:Maria van Brussel,father:Carel Haverbeke
	reduceAncestors==return Maria van Brussel,mother:Joanna de Causmaecker,father:Jan Frans van Brussel
	reduceAncestors==return Joanna de Causmaecker,mother:null,father:Bernardus de Causmaecker
	reduceAncestors==null
	reduceAncestors==return Bernardus de Causmaecker,mother:Livina Haverbeke,father:Lieven de Causmaecker
	reduceAncestors==return Livina Haverbeke,mother:Joanna de Pape,father:Daniel Haverbeke
	reduceAncestors==return Joanna de Pape,mother:Petronella Wauters,father:Vincent de Pape
	reduceAncestors==null
	reduceAncestors==null
	56 fromMother:0,fromFather:0
	reduceAncestors==return Daniel Haverbeke,mother:Elisabeth Hercke,father:Lieven Haverbeke
	reduceAncestors==return Elisabeth Hercke,mother:Margriet de Brabander,father:Willem Hercke
	reduceAncestors==null
	reduceAncestors==null
	57 fromMother:0,fromFather:0
	reduceAncestors==return Lieven Haverbeke,mother:Anna van Hecke,father:Pieter Haverbeke
	reduceAncestors==return Anna van Hecke,mother:Martijntken Beelaert,father:Paschasius van Hecke
	reduceAncestors==null
	reduceAncestors==null
	58 fromMother:0,fromFather:0
	reduceAncestors==return Pieter Haverbeke,mother:null,father:Lieven van Haverbeke
	reduceAncestors==null
	reduceAncestors==return Lieven van Haverbeke,mother:Lievijne Jans,father:Pauwels van Haverbeke
	reduceAncestors==return Lievijne Jans,mother:null,father:null
	reduceAncestors==null
	reduceAncestors==null
	59 fromMother:0,fromFather:0
	reduceAncestors==return Pauwels van Haverbeke,mother:null,father:N. van Haverbeke
	reduceAncestors==null
	reduceAncestors==null
	Pauwels van Haverbeke
	60 fromMother:0,fromFather:1
	61 fromMother:0,fromFather:0.5
	62 fromMother:0,fromFather:0.25
	63 fromMother:0,fromFather:0.125
	64 fromMother:0,fromFather:0.0625
	reduceAncestors==return Lieven de Causmaecker,mother:Joanna Claes,father:Carel de Causmaecker
	reduceAncestors==null
	reduceAncestors==null
	65 fromMother:0,fromFather:0
	66 fromMother:0.03125,fromFather:0
	67 fromMother:0,fromFather:0.015625
	reduceAncestors==return Jan Frans van Brussel,mother:null,father:Jacobus Bernardus van Brussel
	reduceAncestors==null
	reduceAncestors==return Jacobus Bernardus van Brussel,mother:Elisabeth Haverbeke,father:Jan van Brussel
	reduceAncestors==return Elisabeth Haverbeke,mother:Maria de Rycke,father:Jan Haverbeke
	reduceAncestors==return Maria de Rycke,mother:Laurentia van Vlaenderen,father:Frederik de Rycke
	reduceAncestors==null
	reduceAncestors==null
	68 fromMother:0,fromFather:0
	reduceAncestors==return Jan Haverbeke,mother:Elisabeth Hercke,father:Lieven Haverbeke
	reduceAncestors==return Elisabeth Hercke,mother:Margriet de Brabander,father:Willem Hercke
	reduceAncestors==null
	reduceAncestors==null
	69 fromMother:0,fromFather:0
	reduceAncestors==return Lieven Haverbeke,mother:Anna van Hecke,father:Pieter Haverbeke
	reduceAncestors==return Anna van Hecke,mother:Martijntken Beelaert,father:Paschasius van Hecke
	reduceAncestors==null
	reduceAncestors==null
	70 fromMother:0,fromFather:0
	reduceAncestors==return Pieter Haverbeke,mother:null,father:Lieven van Haverbeke
	reduceAncestors==null
	reduceAncestors==return Lieven van Haverbeke,mother:Lievijne Jans,father:Pauwels van Haverbeke
	reduceAncestors==return Lievijne Jans,mother:null,father:null
	reduceAncestors==null
	reduceAncestors==null
	71 fromMother:0,fromFather:0
	reduceAncestors==return Pauwels van Haverbeke,mother:null,father:N. van Haverbeke
	reduceAncestors==null
	reduceAncestors==null
	Pauwels van Haverbeke
	72 fromMother:0,fromFather:1
	73 fromMother:0,fromFather:0.5
	74 fromMother:0,fromFather:0.25
	75 fromMother:0,fromFather:0.125
	76 fromMother:0,fromFather:0.0625
	reduceAncestors==return Jan van Brussel,mother:Joanna van Rooten,father:Jacobus van Brussel
	reduceAncestors==null
	reduceAncestors==null
	77 fromMother:0,fromFather:0
	78 fromMother:0.03125,fromFather:0
	79 fromMother:0,fromFather:0.015625
	80 fromMother:0.0078125,fromFather:0.0078125
	reduceAncestors==return Carel Haverbeke,mother:Livina Sierens,father:Pieter Antone Haverbeke
	reduceAncestors==return Livina Sierens,mother:Maria van Waes,father:Jan Sierens
	reduceAncestors==null
	reduceAncestors==null
	81 fromMother:0,fromFather:0
	reduceAncestors==return Pieter Antone Haverbeke,mother:Petronella de Decker,father:Jan Francies Haverbeke
	reduceAncestors==return Petronella de Decker,mother:Livina Haverbeke,father:Pieter de Decker
	reduceAncestors==return Livina Haverbeke,mother:Joanna de Pape,father:Daniel Haverbeke
	reduceAncestors==return Joanna de Pape,mother:Petronella Wauters,father:Vincent de Pape
	reduceAncestors==null
	reduceAncestors==null
	82 fromMother:0,fromFather:0
	reduceAncestors==return Daniel Haverbeke,mother:Elisabeth Hercke,father:Lieven Haverbeke
	reduceAncestors==return Elisabeth Hercke,mother:Margriet de Brabander,father:Willem Hercke
	reduceAncestors==null
	reduceAncestors==null
	83 fromMother:0,fromFather:0
	reduceAncestors==return Lieven Haverbeke,mother:Anna van Hecke,father:Pieter Haverbeke
	reduceAncestors==return Anna van Hecke,mother:Martijntken Beelaert,father:Paschasius van Hecke
	reduceAncestors==null
	reduceAncestors==null
	84 fromMother:0,fromFather:0
	reduceAncestors==return Pieter Haverbeke,mother:null,father:Lieven van Haverbeke
	reduceAncestors==null
	reduceAncestors==return Lieven van Haverbeke,mother:Lievijne Jans,father:Pauwels van Haverbeke
	reduceAncestors==return Lievijne Jans,mother:null,father:null
	reduceAncestors==null
	reduceAncestors==null
	85 fromMother:0,fromFather:0
	reduceAncestors==return Pauwels van Haverbeke,mother:null,father:N. van Haverbeke
	reduceAncestors==null
	reduceAncestors==null
	Pauwels van Haverbeke
	86 fromMother:0,fromFather:1
	87 fromMother:0,fromFather:0.5
	88 fromMother:0,fromFather:0.25
	89 fromMother:0,fromFather:0.125
	90 fromMother:0,fromFather:0.0625
	reduceAncestors==return Pieter de Decker,mother:Petronella van de Steene,father:Joos de Decker
	reduceAncestors==null
	reduceAncestors==null
	91 fromMother:0,fromFather:0
	92 fromMother:0.03125,fromFather:0
	reduceAncestors==return Jan Francies Haverbeke,mother:Livina de Vrieze,father:Pieter Bernard Haverbeke
	reduceAncestors==null
	reduceAncestors==return Pieter Bernard Haverbeke,mother:Petronella Wauters,father:Willem Haverbeke
	reduceAncestors==null
	reduceAncestors==return Willem Haverbeke,mother:Elisabeth Hercke,father:Lieven Haverbeke
	reduceAncestors==return Elisabeth Hercke,mother:Margriet de Brabander,father:Willem Hercke
	reduceAncestors==null
	reduceAncestors==null
	93 fromMother:0,fromFather:0
	reduceAncestors==return Lieven Haverbeke,mother:Anna van Hecke,father:Pieter Haverbeke
	reduceAncestors==return Anna van Hecke,mother:Martijntken Beelaert,father:Paschasius van Hecke
	reduceAncestors==null
	reduceAncestors==null
	94 fromMother:0,fromFather:0
	reduceAncestors==return Pieter Haverbeke,mother:null,father:Lieven van Haverbeke
	reduceAncestors==null
	reduceAncestors==return Lieven van Haverbeke,mother:Lievijne Jans,father:Pauwels van Haverbeke
	reduceAncestors==return Lievijne Jans,mother:null,father:null
	reduceAncestors==null
	reduceAncestors==null
	95 fromMother:0,fromFather:0
	reduceAncestors==return Pauwels van Haverbeke,mother:null,father:N. van Haverbeke
	reduceAncestors==null
	reduceAncestors==null
	Pauwels van Haverbeke
	96 fromMother:0,fromFather:1
	97 fromMother:0,fromFather:0.5
	98 fromMother:0,fromFather:0.25
	99 fromMother:0,fromFather:0.125
	100 fromMother:0,fromFather:0.0625
	101 fromMother:0,fromFather:0.03125
	102 fromMother:0.015625,fromFather:0.015625
	103 fromMother:0,fromFather:0.015625
	104 fromMother:0.0078125,fromFather:0.0078125
	105 fromMother:0,fromFather:0.0078125
	106 fromMother:0,fromFather:0.00390625
	0.001953125
	[Finished in 0.3s]