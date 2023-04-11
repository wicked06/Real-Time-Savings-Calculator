import React from 'react';
import Background from '../assets/side.svg';
import './Home.css';
const HomeCalculator = () => {
    return(
        <>



 {/* START */}

 <div className="background"></div>
<div className="container-fluid">
      <div className="text-center">
         <p className="heading-title">Real Time Savings Calculator</p>
      </div>

<div className="main">
   
{/* Cris UI */}




{/* start of first column */}
       <div className="content">
       <div class="row g-0">
         <div class="col-6 col-md-4">
         <img src={Background} alt='bg-img' className="background"></img>
         </div>
{/* end of first column */}


{/* start of second column */}
         <div class="col-sm-6 col-md-8">
{/* start of select */}
<div className="forms">
               <div class="d-flex flex-row-reverse">
                     <div class="p-2">
                     <div class="container ">
                     <div class="row align-items-start">
                           <div class="col-2">
                           <label class="role">Role:</label>
                           </div>
                           <div class="col-8">
                              
                              <select class="select" aria-label="Default select example" >
                              <option selected disabled>Select Role</option>
                              <option value="1">Java Developer</option>
                              <option value="2">App Developer</option>
                              <option value="3">SAP Consultant</option>
                              </select>
                           </div>
                           
                     </div>
                     </div>
                           

                          
                     </div>
               </div>
{/* end of select */}


   {/* start of first row */}
   <div class="first container-fluid">
               <div class="row ">
                     <div class="col-2">
                     <label >Salary</label>
                     <input type="text" id="salary" className="textbox"/>
                     

                           
                     </div>
                     <div class="col-1">
                           <h1 className='process'>+</h1>
                     </div>
                     <div class="col-2">
                           <label>Employee Burden</label>
                           <input type="text" id="burden" className="textbox"/>
                     </div>
                     <div class="col-1">
                           <h1 className='process'>x</h1>
                     </div>
                     <div class="col-2">
                           <label >Team Size</label>
                           <input type="text" id="team" className="textbox"/>
                     </div>
                     <div class="col-1">
                           <h1 className='process'>=</h1>
                     </div>
                     <div class="col-2">
                     <label >Your Cost</label>
                           <input type="text" id="cost" className="textbox"/>
                     </div>
               </div>
               </div>
{/* end of first row */}
{/* start of second row */}
<div class="container-fluid">
               <div class="row ">
                     <div class="col-2">
                     <label >Personal Fee</label>
                     <input type="text" id="salary" className="textbox"/>
                     

                           
                     </div>
                     <div class="col-1">
                           <h1 className='process'>+</h1>
                     </div>
                     <div class="col-2">
                           <label>Employee Burden</label>
                           <input type="text" id="burden" className="textbox"/>
                     </div>
                     <div class="col-1">
                           <h1 className='process'>x</h1>
                     </div>
                     <div class="col-2">
                           <label >Number of Resources </label>
                           <input type="text" id="team" className="textbox"/>
                     </div>
                     <div class="col-1">
                           <h1 className='process'>=</h1>
                     </div>
                     <div class="col-2">
                     <label >Your Cost with Personiv</label>
                           <input type="text" id="cost" className="textbox"/>
                     </div>
               </div>
               </div>
{/* end of second layer */}
</div>
                     <div class="d-flex justify-content-center">
                        <button class="compute">Compute</button>
                     </div>
  
  
                     <div className="results">
                     <div class="container px-4 text-center">
                     <div class="row gx-5">
                        <div class="col">
                        <div class="p-3">
                              <h1>10,000</h1>
                              <h4>Your Saving</h4>
                        </div>
                        </div>
                        <div class="col">
                           <div class="p-3">
                              <h1>30.5%</h1>
                              <h4>Percentage Cost Savings</h4>
                           </div>
                        </div>
                     </div>
                     </div>

                     </div>

</div>
{/* end of second column */}
       </div>

              
         </div>




   </div>
{/* End */}
</div>


        </>
    )
}
export default HomeCalculator;