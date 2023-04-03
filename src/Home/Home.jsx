import React from 'react';
import Background from '../assets/background.svg';
import './Home.css';
const HomeCalculator = () => {
    return(
        <>
           {/* <div className="heading-box">
              <p className="heading-title">Real Time Savings Calculator</p>
           </div>

           <div className="home-container">
               <div className="left-panel-wrapper">
                  <div className="image-box">
                    <img src={Background} alt='bg-img' className="background"></img>
                  </div>
               </div>


               <div className="right-panel-wrapper">
                 <div className="dropdown-job">
                     <div className="title">Job Title</div>
                     <select name="Job Title" id="job">
                         <option value="Java Developer">Java Developer</option>
                         <option value="App Developer">App Developer</option>
                         <option value="SAP Consultant">SAP Consultant</option>
                     </select>
                 </div>
                   <div className="form-container">
                      <form action="#">
                          <div className="form-group">
                             <div className="title">Salary</div>
                             <input type="text" value="20000" className="salary" />
                          </div>

                          <div className="form-group">
                             <div className="title">Employee Burden</div>
                             <input type="text" value="20000" className="employee-burden" />
                          </div>

                          <div className="form-group">
                             <div className="title">Team Size</div>
                             <input type="text" value="20000" className="team-size" />
                          </div>

                          <div className="form-group">
                             <div className="title">Your Cost</div>
                             <input type="text" value="20000" className="cost" />
                          </div>
                      </form>
                   </div>


                   <div className="form-container">
                      <form action="#">
                          <div className="form-group">
                             <div className="title">GECO Fee</div>
                             <input type="text" value="20000" className="fee" />
                          </div>

                          <div className="form-group">
                             <div className="title">Employee Burden</div>
                             <input type="text" value="20000" className="employee-burden" />
                          </div>

                          <div className="form-group">
                             <div className="title">Number of Resources</div>
                             <input type="text" value="20000" className="resources" />
                          </div>

                          <div className="form-group">
                             <div className="title">Your Cost with GECO</div>
                             <input type="text" value="20000" className="geco-cost" />
                          </div>
                      </form>
                   </div>

                   <div className="button-box">
                      <button type="submit">Calculate</button>
                   </div>

                   <div className="calculator-box-result">
                       <h1>Your Saving</h1>
                       <h1>Percentage Cost Savings</h1>
                   </div>
               </div>


           </div> */}


{/* Cris UI */}

{/* START */}
   <div className="container-fluid">
      <div className="text-center">
         <p className="heading-title">Real Time Savings Calculator</p>
      </div>


{/* start of first column */}
         <div class="row g-0">
         <div class="col-6 col-md-4">
         <img src={Background} alt='bg-img' className="background"></img>
         </div>
{/* end of first column */}


{/* start of second column */}
         <div class="col-sm-6 col-md-8">
{/* start of select */}
               <div class="d-flex flex-row-reverse">
                     <div class="p-2">
                     <div class="container ">
                     <div class="row align-items-start">
                           <div class="col-4">
                           <label> Role </label>
                           </div>
                           <div class="col-8">
                              <select class="form-select" aria-label="Default select example">
                              <option selected disabled>Select Job</option>
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
               <div class="container-fluid">
               <div class="row ">
                     <div class="col-2">
                     <label >Salary</label>
                     <input type="text" id="salary" className="form-control"/>
                     

                           
                     </div>
                     <div class="col-1">
                           <h1>+</h1>
                     </div>
                     <div class="col-2">
                           <label>Employee Burden</label>
                           <input type="text" id="burden" className="form-control"/>
                     </div>
                     <div class="col-1">
                           <h1>x</h1>
                     </div>
                     <div class="col-2">
                           <label >Team Size</label>
                           <input type="text" id="team" className="form-control"/>
                     </div>
                     <div class="col-1">
                           <h1>=</h1>
                     </div>
                     <div class="col-2">
                     <label >Your Cost</label>
                           <input type="text" id="cost" className="form-control"/>
                     </div>
               </div>
               </div>
{/* end of first row */}
{/* start of second row */}
<div class="container-fluid">
               <div class="row ">
                     <div class="col-2">
                     <label >Personal Fee</label>
                     <input type="text" id="salary" className="form-control"/>
                     

                           
                     </div>
                     <div class="col-1">
                           <h1>+</h1>
                     </div>
                     <div class="col-2">
                           <label>Employee Burden</label>
                           <input type="text" id="burden" className="form-control"/>
                     </div>
                     <div class="col-1">
                           <h1>x</h1>
                     </div>
                     <div class="col-2">
                           <label >Number of Resources </label>
                           <input type="text" id="team" className="form-control"/>
                     </div>
                     <div class="col-1">
                           <h1>=</h1>
                     </div>
                     <div class="col-2">
                     <label >Your Cost with Personiv</label>
                           <input type="text" id="cost" className="form-control"/>
                     </div>
               </div>
               </div>
{/* end of second layer */}
                     <div class="d-flex justify-content-center">
                        <button class="compute">Compute</button>
                     </div>
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
{/* end of second column */}

              
         </div>




   </div>
{/* End */}



        </>
    )
}
export default HomeCalculator;