import React from 'react';
import './Home.css';
import $ from 'jquery';
import Background from '../assets/side.svg';

function HomeCalculator() {

   //Added JQUERY Function
   $(function (){
      var calcSalary = $('#calc-salary'); //Salary
      var calcBurden = $('#calc-burden'); //Employee Burden
      var calcSize = $('#calc-size') ;    //Team Size
      var calcCost = $('#calc-cost');     //Cost

      var calcGecoFee = $('#calc-geco-fee');        //GECO Fee
      var calcGecoBurden = $('#calc-geco-burden');  //GECO Burden
      var calcGecoSize = $('#calc-geco-size');      //GECO Size
      var calcGecoCost = $('#calc-geco-cost');      //GECO Cost
      
      var calcSavings = $('#calc-savings');              //Savings
      var calcPercentage = $('#calc-savings-percentage') //Percentage
     

      function addCommas(num){
          var num_parts = num.toString().split(".");
          num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          return num_parts.join(".");
      }

      function removeCommas(num){
         var num = num.replace(/\,/g,'');
         return num;
      }

      function fnCalculate(){
         var calcCost = (parseInt( removeCommas($('#calc-salary').val()) ) + parseInt( removeCommas($('#calc-burden').val()) )) * parseInt( removeCommas($('#calc-size').val()) );
         var calcGecoCost = (parseInt( removeCommas($('#calc-geco-fee').val()) ) + parseInt( removeCommas($('#calc-geco-burden').val()) )) * parseInt( removeCommas($('#calc-geco-size').val()) );
           
         //Get the value of cost
         $('#calc-cost').val( addCommas(calcCost) );
         $('#calc-geco-cost').val( addCommas(calcGecoCost) );
        
         //Get the value of savings
         $('#calc-savings .value').html( addCommas(calcCost - calcGecoCost) );

         //Get the value of percentage based on the salary
         if( removeCommas($('#calc-salary').val()) > 0){
            calcPercentage = 100 - 100 * (calcGecoCost / calcCost);
            $('#calc-savings-percentage .value').html( calcPercentage.toFixed(2));
         } else {
            $('#calc-savings-percentage .value').html('0');
         }
      }
      
      //Navigate the select option of the job title
      $('#calc-job-title').on('change', function() {
          $('#calc')
      })




    })


    return(
        <>
        <div class="container-fluid ">
  <div class="row">     
    <div class="col-3">
    <img src={Background} alt='bg-img' class="background"></img>
    </div>


{/* SECOND COLUMN */}
    <div class="col-9">

    <form id="calc-personiv-form" data-hs-cf-bound="true">
    <div class="select-wrap">
                      <label class="jobtitle">Job Title :</label> <br />
                      <select class="select" id="calc-job-title" name="calc-job-title">
                         <option name="calc-select" data-salary="0" data-fee="0" disabled selected>Select Role</option>
                         <option name="calc-java-developer" value="java-dev" data-salary="40000" data-fee="34000">Java Developer</option>
                         <option name="calc-mobile-developer" value="mobile-dev" data-salary="45000" data-fee="30000">Mobile Developer</option>
                         <option name="calc-react-developer" value="react-dev" data-salary="30000" data-fee="30000">React JS Developer</option>
                         <option name="calc-web-developer" value="web-dev" data-salary="25000" data-fee="15000">Web Developer</option>
                         <option name="calc-soft-eng" value="soft-eng" data-salary="50000" data-fee="30000">Software Engineer</option>
                         <option name="calc-sap-consultant" value="sap-consultant" data-salary="35000" data-fee="20000">SAP Consultant</option>
                         <option name="calc-it-support" value="it-support" data-salary="20000" data-fee="10000">IT Support</option>
                         <option name="calc-data-analyst" value="data-analyst" data-salary="20000" data-fee="15000">Data Analyst</option>
                      </select>
                  </div>
                  <div class="form">
                  

                        <label for="calc-salary" class="name">Salary</label> 
                        <label for="calc-burden" class="burden1" >Employee Burden</label> 
                        <label for="calc-burden" class="tm" >Team Size</label> 
                        <label for="calc-burden" class="ycost" >Your Cost</label> 


                        <br />
                       
                       <input type="text" id="calc-salary" name="calc-salary" />

                        <span class="addition-sign">
                        +
                        </span>



                        <input type="text" id="calc-burden" name="calc-burden" />

                        <span class="multiply-sign">
                        x
                        </span>

                        <input type="text" id="calc-size" name="calc-size" value="1" maxlength="3"/>

                        <span class="equal-size">
                        =
                        </span>

                        <input type="text" id="calc-cost" name="calc-cost" readonly />

                        <div className="second-layer">

                        <label for="calc-geco-fee" class="gfee">GECO Fee</label>
                        <label for="calc-geco-burden" class="burden2">Employee Burden</label>
                        <label for="calc-geco-size" class="nr">Number of Resources</label>
                        <label for="calc-geco-cost" class="your-cost-with-geco">Your Cost with GECO</label>

                        <br />

                        <input type="text" id="calc-geco-fee" name="calc-geco-fee" readonly />

                        <span class="addition-sign">
                        +
                        </span>

                        <input type="text" id="calc-geco-size" name="calc-geco-size" value="1" />

                        <span class="multiply-sign">
                        x
                        </span>

                        <input type="text" id="calc-geco-size" name="calc-geco-size" value="1" />

                        <span class="equal-size">
                        =
                        </span>
                        <input type="text" id="calc-geco-cost" name="calc-geco-cost" readonly />

                       </div>
                    
                       

                     
                    
                  </div>
                  
                  <button type="submit" value="Update Totals" class="update-button">Calculate</button>

    </form>
                        
    <div class="note">
                     <label class="note-content">
                        "*Employee Burden is the average estimate of indirect labor-related spend including benefits, perks, and payroll costs.
                          We estimate this at 30%. If you cost differs, fill it out in the box above."
                     </label>
                     </div>

                       <div className="results">
                       <label class = "total"> $43,862</label>
                       <label class="percent"> 57.07 %</label>
                       
                       

                       
                       </div>

                       <div className="title">


                       <label class="bottom1"> Your Savings </label>
                       
                        <label class="bottom2"> Percentage Cost Savings </label>
                       </div>
                        

    
    </div>

    
    

    

{/* End */}
  </div>
</div>

{/*             
              <form id="calc-personiv-form" data-hs-cf-bound="true">
                  <div class="select-wrap">
                      <label>Job Title</label>
                      <select id="calc-job-title" name="calc-job-title">
                         <option name="calc-select" data-salary="0" data-fee="0" disabled selected>Select Role</option>
                         <option name="calc-java-developer" value="java-dev" data-salary="40000" data-fee="34000">Java Developer</option>
                         <option name="calc-mobile-developer" value="mobile-dev" data-salary="45000" data-fee="30000">Mobile Developer</option>
                         <option name="calc-react-developer" value="react-dev" data-salary="30000" data-fee="30000">React JS Developer</option>
                         <option name="calc-web-developer" value="web-dev" data-salary="25000" data-fee="15000">Web Developer</option>
                         <option name="calc-soft-eng" value="soft-eng" data-salary="50000" data-fee="30000">Software Engineer</option>
                         <option name="calc-sap-consultant" value="sap-consultant" data-salary="35000" data-fee="20000">SAP Consultant</option>
                         <option name="calc-it-support" value="it-support" data-salary="20000" data-fee="10000">IT Support</option>
                         <option name="calc-data-analyst" value="data-analyst" data-salary="20000" data-fee="15000">Data Analyst</option>
                      </select>
                  </div>
        
         
                        <label for="calc-salary">Salary</label>
                        <input type="text" id="calc-salary" name="calc-salary" />
                
                     <span class="addition-sign">
                         +
                     </span>
                    
                        <label for="calc-burden">Employee Burden</label>
                        <input type="text" id="calc-burden" name="calc-burden" />
                   
                     <span class="multiply-sign">
                        *
                     </span>
                     
                        <label for="calc-size">Team Size</label>
                        <input type="text" id="calc-size" name="calc-size" value="1" maxlength="3"/>
                    
                     <span class="equal-size">
                        =
                     </span>
                     
                         <label for="calc-cost">Your Cost</label>
                         <input type="text" id="calc-cost" name="calc-cost" readonly />
                     
                 
             
                   
                        <label for="calc-geco-fee">GECO Fee</label> 1
                        <input type="text" id="calc-geco-fee" name="calc-geco-fee" readonly />
                   
                     <span class="addition-sign">
                        +
                     </span>
                    
                        <label for="calc-geco-burden">Employee Burden</label>
                        <input type="text" id="calc-geco-burden" name="calc-geco-burden" value="0" readonly />
                    
                     <span class="multiply-sign">
                        *
                     </span>
                     
                        <label for="calc-geco-size">Number of Resources</label>
                        <input type="text" id="calc-geco-size" name="calc-geco-size" value="1" />
                     
                     <span class="equals-sign">
                        =
                     </span>
                     
                        <label for="calc-geco-cost">Your Cost with GECO</label>
                        <input type="text" id="calc-geco-cost" name="calc-geco-cost" readonly />
                     
                  
                  <div class="update-wrap">
                     <input type="submit" value="Update Totals" class="update-button" />
                  </div>
                  <div class="note">
                     <span>
                        "*Employee Burden is the average estimate of indirect labor-related spend including benefits, perks, and payroll costs.
                          We estimate this at 30%. If you cost differs, fill it out in the box above."
                     </span>
                  </div>
                  <div class="totals-wrap">
                     <div class="total-wrap">
                        <span id="calc-savings">
                           $
                           <span class="value">43,862</span>
                        </span>
                        " Your Savings "
                     </div>
                     <div class="total-wrap">
                        <span id="calc-savings-percentage">
                           <span class="value">57.07</span>
                           %

                        </span>
                        " Percentage Cost Savings "
                     </div>
                  </div>
              </form>
           </div> */}
        {/* End */}


        </>
    )
}
export default HomeCalculator;