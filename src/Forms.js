import React from 'react'
import "./forms.css"

function forms() {
    return (
        <div className ="formHead">
          <div className = " formMain">
                <h2 style ={{textAlign:"center"}}>Contact Form</h2>
              <form 
              className = "formgroup"
              >
                  <div className = "inputbox">
                    <input
                    placeholder ="Name"
                    /> 
                  </div>

                  <div className = "inputbox">
                    <input
                    placeholder ="Email"
                    />
                  </div>
               
                  <div className = "inputbox">
                    <textarea
                    placeholder ="Message"
                    />
                  </div>

                  <div id ="container">
                      <button>Send</button>
                  </div>
                  
              </form>
          
          </div>
        
        </div>
    )
}

export default forms
