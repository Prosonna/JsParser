// spec.js 


describe('Medicare - Manual Adjustments', function () {


    beforeEach(function () {
        browser.get('http://.../');
    });

    it('Verify the title -Expected result- the title should be: Manual Adjustments - MEDICARE - Maintenance', function () {
        expect(browser.getTitle()).toEqual('Manual Adjustments - MEDICARE - Maintenance');
    });
    
});
  
  
//********** Home ************
describe('Criteria and Adjustments Section', function () {
    
    it('Verify all the labels should have correct spellings -Expected result- all the labels have correct spellings', function () {

    });
    
    it('Verify the default values of the Company and Product dropdowns -Expected result- default value for Company: SANOFI-AVENTIS, Product: ALL ', function () {

    });

    it('Verify the Company dropdown values by clicking on the Company dropdown -Expected result- Four options will be shown: SANOFI-AVENTIS, GENZYME, SANOFI PASTEUR, AVENTIS-BEHRING', function () {
         
    });
    
    it('Verify the Product dropdown values by changing the value on the Company dropdown -Expected result- values of Product dropdown will be changed according to the Company names fetching from the database', function () {
        
    });
    
    it('Verify the sorting feature of columns of Adjustments grid: click on the column head of each column -Expected result- the selected column will be sorted in ascending order', function () {
        
    });
    
    it('Verify the edit option: double click on a specific row from the Adjustment grid -Expected result- the Edit/View Manual Adjustment Detail window should open in non-editable form', function () {
        
    });   
    
    it('Verify the Row count at the bottom of all the items in the Adjustment grid -Expected result- Row: (number of selected items) of (total number of items)', function () {
         
    });
    
    
    //************** visibility of buttons ************

    it('Check the button visibility of all buttons at initial stage -Expected result- All the buttons should be enabled expect for Find Button', function () {
         
    });
    
    it('Verify the visibility of the Find button by making any changes to the default selected option from the Company dropdown -Expected result- Find button should be enabled', function () {
        
    });    
    
    it('Verify the Disability of other buttons before clicking on Find button by selecting any value from Company dropdown, then selecting a value from Product dropdown -Expected result- Add, Reverse buttons should be disabled before clicking on the Find button', function () {

    });

    it('Verify the visibility of the Find button by selecting any value from the Company dropdown, then Product, then clicking on the Find button -Expected result- all the other buttons will be enabled, except for Find button, if there are some items in the Adjustments grid', function () {

    });
    
    it('Verify the visibility of the Find and Reverse button by selecting any value from the Company dropdown, then Product, then clicking on the Find button -Expected result- all the other buttons will be enabled, except for Find and Reverse buttons, if there is no item in the Adjustments grid', function () {

    });
    
    
    
//************** Criteria and Adjustments Section *******************  

    it('Verify the dependency by selecting a Company name from the dropdown, then clicking on the Product dropdown -Expected result- values will change in Product dropdown according to company names and also match with the database', function () {

    });
    
    it('Verify the default value of the Product dropdown by selecting any value from the Company dropdown, then clicking on the Find button -Expected result- All the items will be shown in the grid without filtering in the Adjustments grid fetching from the database', function () {
         
    });
    
    it('Verify the default value of the Product dropdown by selecting any value from the Company dropdown, then clicking on the Find button -Expected result- All the items will be shown in the grid without filtering', function () {
        
    });

    it('Verify the Adjustment grid items: Select company, select product then click on the find button -Expected result- filtered result will be shown in the Adjustments grid from database and find button will be disabled', function () {

    });

    it('Verify the Adjustment grid -Expected result- all Active status rows should be black and Archived rows should be grey', function () {

    });

}); 




describe('Add Button', function () {
    
    it('Verify the job done by clicking on the Add button -Expected result- a modal should popup with title: Edit/View Manual Adjustment Detail', function () {
        
    });
    
    it('Verify the Close button of the Edit/View Manual Adjustment Detail modal without making any changes -Expected result- a confirmation message should popup with title: Health Care Regulatory System. Message: Do you want to save changes? Yes/No/Cancel.', function () {
        
    });
    
        it('Click on Cancel of the confirmation popup -Expected result- the popup should be closed without making any changes', function () {
        
        });
        
        it('Click on No of the confirmation popup -Expected result- both the confirmation popup and Edit/View Manual Adjustment Detail window should be closed without making any changes', function () {
        
        });
        
        it('Click on Yes of the confirmation popup -Expected result- changes will be saved if all required fields are filled. Otherwise, the Save button procedures will be repeated.', function () {
        
        });
    
    it('Check all alignments and spellings -Expected result- all alignments should be correctly alligned according to the form and labels should have correct spellings', function () {
        
    });
    
        it('Check all required fields for Directs -Expected result- NDC Labeler, NDC Product, NDC Package, Customer Id, Transaction Type, Pkg Qty, Tot Amt, Invoice Date and Comments are the required fields', function () {
        
        });
        
        it('Check all required fields for Indirects -Expected result- NDC Labeler, NDC Product, NDC Package, Customer Id, Transaction Type, Wholesale Id, Pkg Qty, Tot Amt, Charge Back Amount, Whls Invoice Date, Chrgbk Paid Date and Comments are the required fields', function () {
        
        });
        
        it('Check all required fields for Rebates/Fees -Expected result- NDC Labeler, NDC Product, NDC Package, Customer Id, Transaction Type, Claim Unit Qty, Pkg Qty, Rbt Amt, Gross Charge Amount, Claim Begin Date, Claim End Date, Rebate Paid Date and Comments are the required fields', function () {
        
        });
       
        it('Verify the alert message for all the required fields: click on the save button without the required fields for Directs/Indirects/Rebates\Fees -Expected result- an alert message should popup with title: Health Care Regulatory System. Message: The ___ field is a required field. Please value this field before saving changes.', function () {
            
        });

//prove value in field1 click on save 



//******************* COMMON SECTION ************************
    it('Click on the Transaction dropdown -Expected result- these values will be shown: directs, indirects, rebates/fees', function () {
        
    });

    it('Click on the NDC Labeler dropdown -Expected result- Independently it will show all the values from database', function () {
        
    });

    it('Keep NDC labeler empty -Expected result- NDC product, NDC Package dropdown, Actual Potency textbox should be disabled', function () {
        
    });

    it('Keep NDC product empty -Expected result- NDC package dropdown, Actual Potency textbox should be disabled', function () {
        
    });
    
 
    it('Verify Trans. type dropdown in Directs by clicking on it -Expected result- should show 5 options from the dropdown: Medicaid Rebate, Admin Fee Discount, Authorized Generic Monthly, Authorized Generic Quarterly, Administrative Fee PAid To A Buying Group', function () {
        
    });

    it('Verify the Actual Potency text field: click on the text field and put char, special char, numbers -Expected result- a validation message should popup with title: Health Care Regulatory System. Message: Item ___ does not pass the validation test.', function () {
        
    });
    
    it('Verify the Actual Potency text field: click on the text field and put as many numbers and decimals as possible -Expected result- if it exceeds 15 digits, it will be rounded to make 15', function () {
        
    }); 
    
    it('Verify length of Price Group ID: put numbers that exceeds the length as it takes string with length not more than 21 -Expected result- a validation message should popup with title: Health Care Regulatory System. Message: Item ___ does not pass the validation test.', function () {
        
    });
    
    it('Verify the validation for WAC Price, Pkg Price -Expected result- takes decimal values rounded to 2 decimal places ', function () {
        
    });
    
    it('Verify the validation for Pkg Qty: put some char as it takes only integer values with a limit of 14 digits -Expected result- a validation message should popup with title: Health Care Regulatory System. Message: Item ___ does not pass the validation test.', function () {
        
    });
  
       

//******Customer ID**********

describe('Customer ID of Edit window', function () {
    
    it('Double click on the Customer Id -Expected result- a search window will popup with title: Customer ID Search', function () {

    });

    it('Select Id radio button from Customer Id search modal then put an Invalid input in search textbox then click on Find button -Expected result- no result will be added to the grid below and OK button will be disabled', function () {

    });

    it('Select Name radio button from Customer id search modal then put an Invalid input in search textbox then click on Find button -Expected result- no result will be added to the grid below and OK button will be disabled', function () {

    });

    it('Select Source radio button from Customer id search modal then put an Invalid input in search textbox then click on Find button -Expected result- no result will be added to the grid below and OK button will be disabled', function () {

    });

    it('Select id radio button from Customer id search modal then put a valid input in search textbox then click on Find button -Expected result- result will be added to the grid below and OK button will be enabled', function () {

    });

    it('Select name radio button from Customer id search modal then put a valid input in search textbox then click on Find button -Expected result- result will be added to the grid below and OK button will be enabled', function () {

    });

    it('Select source radio button from Customer id search modal then put a valid input in search textbox then click on Find button -Expected result- result will be added to the grid below and OK button will be enabled', function () {

    });

    it('Select any radio button from Customer Id Search modal then put a valid input in search textbox, click on Find button, click on a grid data and click OK -Expected result- modal will be closed & customer id should be added to the Customer field of the Edit/View Manual Adjustment modal', function () {

    });
    
    it('Verify the Cancel button of that modal: Select any radio button from Customer id search modal then put a valid input in search textbox, click on Find button, and click CANCEL -Expected result- closes the pop up form without adding any data to the field', function () {

    });

});

    
//********Contract ID*********

describe('Contract ID of Edit window', function () {
    
    it('Double click on the Contract Id -Expected result- a search window will popup with title: Contract ID Search', function () {

    });

    it('Select Id radio button from Contract ID Search modal then put an Invalid input in search textbox then click on Find button -Expected result- no result will be added to the grid below and OK button will be disabled', function () {

    });

    it('Select Name radio button from Contract ID Search modal then put an Invalid input in search textbox then click on Find button -Expected result- no result will be added to the grid below and OK button will be disabled', function () {

    });

    it('Select Source radio button from Contract ID Search modal then put an Invalid input in search textbox then click on Find button -Expected result- no result will be added to the grid below and OK button will be disabled', function () {

    });

    it('Select Id radio button from Contract ID Search modal then put a valid input in search textbox then click on Find button -Expected result- result will be added to the grid below and OK button will be enabled', function () {

    });

    it('Select Name radio button from Contract ID Search modal then put a valid input in search textbox then click on Find button -Expected result- result will be added to the grid below and OK button will be enabled', function () {

    });

    it('Select any radio button from Contract ID Search modal then put a valid input in search textbox, click on Find button, click on a grid data and click OK -Expected result- contract id should be added to the Contract id field of the add modal', function () {

    });

    it('Verify the Cancel button of that modal: Select any radio button from Contract ID Search modal then put a valid input in search textbox, click on Find button, click on a grid data and click Cancel -Expected result- closes the pop up form without adding any data to the field', function () {

    });
    
});    
    
//**************** Directs **********************

describe('Grid of Directs', function () {

    it('Verify the dates for Directs -Expected result- should be in proper format like month/date/year', function () {
        
    });
    
    it('Verify the Tot Amt -Expected result- takes decimal values rounded to 2 decimal places ', function () {
        
    });
    
    it('Verify the validation for Tot Amt: click on the text field and put char, special char, numbers -Expected result- a validation message should popup with title: Health Care Regulatory System. Message: Item ___ does not pass the validation test.', function () {
        
    });
    
    it('Verify the Term Disc Pct -Expected result- takes decimal values without any limit', function () {
        
    });
    
    it('Verify the validation for Term Disc Pct: click on the text field and put char, special char, numbers -Expected result- a validation message should popup with title: Health Care Regulatory System. Message: Item ___ does not pass the validation test.', function () {
        
    });
    
    it('Verify that Invoice Date cannot be less than the Date Entered Market which comes from Product Family window -Expected result- an alert message should popup with title: Health Care Regulatory System. Message: The ___ Date entered for this manual adjustment is not valid - please check the liability and/or market entry date for this product..', function () {
        
    });

});  

    
//*************** Indirects ********************
describe('Grid of Indirects', function () {

    it('Verify the dates for Indirects -Expected result- should be in proper format like month/date/year', function () {
        
    });
    
    it('Verify the Tot Amt, Chrgbk Amt -Expected result- takes decimal values rounded to 2 decimal places ', function () {
        
    });
    
    it('Verify the validation for Tot Amt, Chrgbk Amt : click on the text field and put char, special char, numbers -Expected result- a validation message should popup with title: Health Care Regulatory System. Message: Item ___ does not pass the validation test.', function () {
        
    });
    
    it('Verify that Whls Invoice/Chrgbk Paid Date cannot be less than the Date Entered Market which comes from Product Family window -Expected result- an alert message should popup with title: Health Care Regulatory System. Message: The ___ Date entered for this manual adjustment is not valid - please check the liability and/or market entry date for this product..', function () {
        
    });
        

//******** Wholesaler ID Search ***********
    it('Double click on the Wholesaler ID -Expected result- a search window will popup with title: Wholesaler ID Search', function () {

    });

    it('Select Id radio button from Wholesaler ID Search modal then put an Invalid input in search textbox then click on Find button -Expected result- no result will be added to the grid below and OK button will be disabled', function () {

    });

    it('Select Name radio button from Wholesaler ID Search modal then put an Invalid input in search textbox then click on Find button -Expected result- no result will be added to the grid below and OK button will be disabled', function () {

    });

    it('Select Source radio button from Wholesaler ID Search modal then put an Invalid input in search textbox then click on Find button -Expected result- no result will be added to the grid below and OK button will be disabled', function () {

    });

    it('Select id radio button from Wholesaler ID Search modal then put a valid input in search textbox then click on Find button -Expected result- result will be added to the grid below and OK button will be enabled', function () {

    });

    it('Select name radio button from Wholesaler ID Search modal then put a valid input in search textbox then click on Find button -Expected result- result will be added to the grid below and OK button will be enabled', function () {

    });

    it('Select source radio button from Wholesaler ID Search modal then put a valid input in search textbox then click on Find button -Expected result- result will be added to the grid below and OK button will be enabled', function () {

    });

    it('Select any radio button from Wholesaler ID Search modal then put a valid input in search textbox, click on Find button, click on a grid data and click OK -Expected result- modal will be closed & Wholesaler ID should be added to the Wholesaler ID field of the Edit/View Manual Adjustment modal', function () {

    });
    
    it('Verify the Cancel button of that modal: Select any radio button from Wholesaler ID Search modal then put a valid input in search textbox, click on Find button, and click CANCEL -Expected result- closes the pop up form without adding any data to the field', function () {

    });

});


    
    
//*************** REBATES/FEES ****************

describe('Grid of Rebates/Fees', function () {
    
    it('Verify the dates format for Rebates/Fees -Expected result- should be in proper format like mm/dd/yyyy', function () {
        
    });
 
    it('Verify that Claim Begin/Claim End/Rebate Paid Date cannot be less than the Date Entered Market which comes from Product Family window -Expected result- an alert message should popup with title: Health Care Regulatory System. Message: The ___ Date entered for this manual adjustment is not valid - please check the liability and/or market entry date for this product..', function () {
        
    });
    
    it('Verify the Claim Unit Qty -Expected result- takes decimal values without any limit', function () {
        
    });
    
    it('Verify the validation for Claim Unit Qty : click on the text field and put char, special char, numbers -Expected result- a validation message should popup with title: Health Care Regulatory System. Message: Item ___ does not pass the validation test.', function () {
        
    });
    
    it('Verify the Rbt Amt, Gross Sale Amt -Expected result- takes decimal values rounded to 2 decimal places ', function () {
        
    });
    
    it('Verify the validation for Rbt Amt, Gross Sale Amt : click on the text field and put char, special char, numbers -Expected result- a validation message should popup with title: Health Care Regulatory System. Message: Item ___ does not pass the validation test.', function () {
        
    });
    
    
});   
    
    
    //************************** SUCCESSFUL SAVE ***********************
    
    it('Verify the Close button after filling up all necessary fields : fill up all the required fields with correct inputs and click on the Close button -Expected result- a confirmation message should popup with title: Health Care Regulatory System. Message: Do you want to save changes? Yes/No/Cancel.', function () {
        
    });
    
        it('Click on the No button on that confirmation popup -Expected result- both the popup message and the Edit/View Manual Adjustment Detail window will be closed without making any changes', function () {
        
        });
        
        it('Click on the Cancel button on that confirmation popup -Expected result- only the popup message will be closed without making any changes', function () {
        
        });
        
        it('Click on the Yes button on that confirmation popup -Expected result- the Item should be added to the adjustment grid properly', function () {
        
        });
    
    it('Verify the Save button with all necessary fields : fill up all the required fields with correct inputs and click on the Save button -Expected result- the Item should be added to the adjustment grid properly', function () {
        
    });
   


});




describe('Reverse Modal', function () {
    
    it('Select an item with Archived Status and then click on the Reverse button -Expected result- a confimation message should popup with title: Reverse. Message: You are about to reverse an "Archived" manual transaction for (NDC), dated (date) with a total amount of (amount). NOTE: this change will cause a deletion of existing, non-transmitted prices for the selected product. Do you want to continue? Yes/No.', function () {
        
    });

        it('Click on No of the Reverse popup -Expected result- the popup should be closed without making any changes', function () {
            
        });
        
        it('Click on Yes of the Reverse popup -Expected result- a comment modal should popup to allow the user enter comments', function () {
            
        });
        
            it('Provide value in comments field -Expected result- Ok button will be enabled', function () {
                
            });
            
                it('Click on the Cancel button -Expected result- form will be closed without making any changes', function () {
                    
                });
                
                it('Click on the Ok button -Expected result- form will be closed and the Status will be changed to Active for the respective item', function () {
                    
                });
                
                
                
   //Repeat the Procedure for Active status.. which changes to Archived


//PROSONNA to Shanewaz - Another logic is there on reverse.. like we cannot do it more than 2times or something. Dev will let that know.

});




describe('Details Modal', function () {
    
    it('Click on a data from the Adjustments grid, then click on Details button -Expected result- all the data should be mapped properly in non-editable form and the window should also contain a unique Trans ID', function () {
        
    });

    it('click on the Details button, then click on the close button of the modal -Expected result- closes the modal properly', function () {
        
    });
});




describe('Close the Window', function () {
    it('Verify the Close button by clicking on the close button of Manual Adjustments - MEDICARE - Maintenance window -Expected result- closes the Manual Adjustments - MEDICARE - Maintenance window', function () {
        
    });
}); 







