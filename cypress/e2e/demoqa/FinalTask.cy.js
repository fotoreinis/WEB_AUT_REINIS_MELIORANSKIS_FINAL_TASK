import 'cypress-file-upload';
describe('Final Task - Automation practice form', function() {
    it('Automation practice form', function() {

      cy.visit('https://demoqa.com/automation-practice-form')
  

      cy.get('#firstName').type('Reinis')
      cy.get('#lastName').type('Melioranskis')
      cy.get('#userEmail').type('reinis.melioranskis@va.lv')
      cy.get('label[for="gender-radio-1"]').click();
      cy.get('#userNumber').type('1234567890')
  
0
      cy.get('#dateOfBirthInput').click()
      cy.get('.react-datepicker__month-select').select('February')
      cy.get('.react-datepicker__year-select').select('1930')
      cy.contains('.react-datepicker__day', '28').click()
  
      cy.get('#subjectsInput').type('Economics')
      cy.contains('.subjects-auto-complete__menu-list', 'Economics').click()
  
      cy.get('label[for="hobbies-checkbox-3"]').click();

  
      cy.readFile('cypress/e2e/files/photo.jpg', 'binary').then(fileContent => {
        cy.get('#uploadPicture').attachFile({
          fileContent: fileContent,
          fileName: 'photo.jpg',
          mimeType: 'image/jpeg'
        });
      });
      
      cy.get('#state')
      .click()
      .find(`#react-select-3-option-0`) 
      .click();

      cy.get('#city')
      .click()
      .find(`#react-select-4-option-0`) 
      .click();

      cy.contains('Submit').click();

      cy.get('.table-responsive').within(() => {
        cy.contains('tr', 'Student Name').should('contain', 'Reinis Melioranskis');
        cy.contains('tr', 'Gender').should('contain', 'Male');
        cy.contains('tr', 'Date of Birth').should('contain', '28 January,1930');
        cy.contains('tr', 'Subjects').should('contain', 'Economics');
        cy.contains('tr', 'Hobbies').should('contain', 'Music');
        cy.contains('tr', 'Picture').should('contain', 'photo.jpg');
        cy.contains('tr', 'State and City').should('contain', 'NCR Delhi');
      });


      })
    })
 