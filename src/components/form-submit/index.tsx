import React from 'react'

import './styles.css'

const FormSubmitExample = (): JSX.Element => {
  return (
    <>
      <form action="/form-submit/" method="GET">
        <fieldset>
          <legend>Form 1 - Numbers</legend>
          <div>
            Enter one to ten digits:
            <input
              data-form-submit-count="true"
              data-form-submit-error-msg="Please enter at least one digit"
              data-form-submit-required="digits"
              maxLength={10}
              name="digits"
              type="text"
            />
          </div>
          <div>
            Any number:
            <input
              data-form-submit-error-msg="Please enter a positive or negative number"
              data-form-submit-required="number"
              name="number"
              type="text"
            />
          </div>
          <div>
            Currency:
            <input
              data-form-submit-error-msg="Please enter a currency amount"
              data-form-submit-required="currency"
              name="currency"
              type="text"
            />
          </div>
          <button type="submit">Submit</button>
          <input name="form-number" type="hidden" value="1" />
        </fieldset>
      </form>
      <form action="/form-submit/" method="POST">
        <fieldset>
          <legend>Form 2 - Contact</legend>
          <div>
            Phone number:
            <input
              data-form-submit-error-msg="Please enter a phone number"
              data-form-submit-required="phone"
              name="phone"
              type="text"
            />
          </div>
          <div>
            City (requires any value):
            <input
              data-form-submit-error-msg="Please enter a your city"
              data-form-submit-required="true"
              name="city"
              type="text"
            />
          </div>
          <div>
            State:
            <select data-form-submit-error-msg="Please select a state" data-form-submit-required="true" name="state">
              <option value="">Select a state</option>
              <option value="1">Denial</option>
              <option value="A">Emergency</option>
              <option value="3">The Union</option>
            </select>
          </div>
          <div>
            ZIP code:
            <input
              data-form-submit-count="5"
              data-form-submit-error-msg="Please enter a 5-digit ZIP code"
              data-form-submit-required="zip"
              name="zip"
              type="text"
            />
          </div>
          <div>
            ZIP code with optional + 4:
            <input
              data-form-submit-error-msg="Please enter a 5- or 9-digit ZIP code"
              data-form-submit-required="zip+4"
              name="zip-plus-4"
              type="text"
            />
          </div>
          <div>
            ZIP code with + 4 required:
            <input
              data-form-submit-error-msg="Please enter a 9-digit ZIP code"
              data-form-submit-required="zip-full"
              name="zip-full"
              type="text"
            />
          </div>
          <div>
            Email address:
            <input
              data-form-submit-error-msg="Please enter a valid email address"
              data-form-submit-required="email"
              name="email"
              type="text"
            />
          </div>
          <button type="submit">Submit</button>
          <input name="form-number" type="hidden" value="2" />
        </fieldset>
      </form>
      <form action="/form-submit/" method="POST">
        <fieldset>
          <legend>Form 3 - Time/date</legend>
          <div>
            Timestamp:
            <input
              className="wide-input"
              data-form-submit-error-msg="Please enter a timestamp in the format MM/DD/YYYY HH:MM:SS.MS"
              data-form-submit-required="timestamp"
              name="timestamp"
              type="text"
            />
          </div>
          <div>
            Date:
            <input
              data-form-submit-error-msg="Please enter a date in the format MM/DD/YYYY"
              data-form-submit-required="date-mmddyyyy"
              name="date-mmddyyyy"
              type="text"
            />
          </div>
          <div>
            Date:
            <input
              data-form-submit-error-msg="Please enter a date in the format YYYY-MM-DD"
              data-form-submit-required="date-yyyymmdd"
              name="date-yyyymmdd"
              type="text"
            />
          </div>
          <div>
            Time:
            <input
              data-form-submit-error-msg="Please enter a time in the format HH:MM"
              data-form-submit-required="time"
              name="time"
              type="text"
            />
          </div>
          <button type="submit">Submit</button>
          <input name="form-number" type="hidden" value="3" />
        </fieldset>
      </form>
      <form action="/form-submit/" method="POST">
        <fieldset>
          <legend>Form 4 - Text areas</legend>
          <div>
            Enter some text:
            <textarea
              data-form-submit-count="250"
              data-form-submit-error-msg="Please enter some text"
              data-form-submit-required="true"
              name="some_text"
            ></textarea>
          </div>
          <div>
            Enter more text (optional):
            <textarea data-form-submit-count="350" name="more_text"></textarea>
          </div>
          <div>
            Phone number:
            <textarea
              data-form-submit-error-msg="Please enter a phone number"
              data-form-submit-required="phone"
              name="phone_text"
            ></textarea>
          </div>
          <button type="submit">Submit</button>
          <input name="form-number" type="hidden" value="4" />
        </fieldset>
      </form>
      <form action="/form-submit/" method="POST">
        <fieldset>
          <legend>Form 5 - Radio buttons and check boxes</legend>
          <div>
            Choose one:
            <br />
            <input
              data-form-submit-error-msg="Please choose a Stephen Sondheim musical"
              data-form-submit-required="radio"
              name="sondheim"
              type="radio"
              value="1"
            />{' '}
            West Side Story
            <br />
            <input name="sondheim" type="radio" value="2" /> A Funny Thing Happened on the Way to the Forum
            <br />
            <input name="sondheim" type="radio" value="3" /> Sweeney Todd
            <br />
            <input name="sondheim" type="radio" value="4" /> Assassins
          </div>
          <div>
            Choose one:
            <br />
            <input
              data-form-submit-error-msg="Please choose a quantum mechanism interpretation"
              data-form-submit-required="radio"
              name="wavefunction"
              type="radio"
              value="everett"
            />{' '}
            Many-worlds interpretation
            <br />
            <input name="wavefunction" type="radio" value="bohr" /> Copenhagen interpretation
            <br />
            <input name="wavefunction" type="radio" value="bohm" /> Bohm&apos;s interpretation
          </div>
          <div>
            Check this box to continue:
            <br />
            <input
              data-form-submit-error-msg="You must agree to continue"
              data-form-submit-required="true"
              id="very-agreeable"
              name="very-agreeable"
              type="checkbox"
              value="Y"
            />
            <label htmlFor="very-agreeable">I&nbsp;agree</label>
            <div data-form-submit-error-for="very-agreeable"></div>
          </div>
          <button type="submit">Submit</button>
          <input name="form-number" type="hidden" value="5" />
        </fieldset>
      </form>
      <form action="/form-submit/" method="POST">
        <fieldset>
          <legend>Form 6 - Web addresses</legend>
          <div>
            URL:
            <input
              className="wide-input"
              data-form-submit-error-msg="Please enter a valid URL"
              data-form-submit-required="url"
              name="url"
              type="text"
            />
          </div>
          <div>
            URL with http/https:
            <input
              className="wide-input"
              data-form-submit-error-msg="Please enter a valid HTTP URL"
              data-form-submit-required="url-http"
              name="url-http"
              type="text"
            />
          </div>
          <div>
            Path portion of URL (after first / after hostname):
            <input
              data-form-submit-error-msg="Please enter a URL path, the part of the URL after the hostname"
              data-form-submit-required="url-path"
              name="url-path"
              type="text"
            />
          </div>
          <div>
            Hostname:
            <input
              data-form-submit-error-msg="Please enter a valid hostname, ex www.google.com"
              data-form-submit-required="hostname"
              name="hostname"
              type="text"
            />
          </div>
          <div>
            Domain:
            <input
              data-form-submit-error-msg="Please enter a valid domain, ex google.com"
              data-form-submit-required="domain"
              name="domain"
              type="text"
            />
          </div>
          <div>
            IP Address:
            <input
              data-form-submit-error-msg="Please enter a valid IP address, ex 192.168.3.14"
              data-form-submit-required="ip-address"
              name="ip-address"
              type="text"
            />
          </div>
          <button type="submit">Submit</button>
          <input name="form-number" type="hidden" value="6" />
        </fieldset>
      </form>
      <form action="/form-submit/" method="POST">
        <fieldset>
          <legend>Form 7 - Sensitive data</legend>
          <strong>Please only submit fictitious test data</strong>
          <div>
            Social security number:
            <input
              data-form-submit-error-msg="Please enter a valid SSN, ex. 123-45-6789"
              data-form-submit-required="ssn"
              name="ssn"
              type="text"
            />
          </div>
          <div>
            ABA routing number (for ACH, found on bottom of checks):
            <input
              data-form-submit-count="true"
              data-form-submit-error-msg="Please enter a valid ABA routing number, ex. 011000015"
              data-form-submit-required="aba-routing"
              maxLength={9}
              name="aba-routing"
              type="text"
            />
          </div>
          <div>
            Credit card:
            <input
              data-form-submit-error-msg="Please enter a valid credit card number, ex. 4111 1111 1111 1111"
              data-form-submit-required="credit-card"
              name="credit-card"
              type="text"
            />
          </div>
          <div>
            CVV (on back of credit card):
            <input
              data-form-submit-error-msg="Please enter a CVV number, ex. 123"
              data-form-submit-required="cvv"
              name="cvv"
              type="text"
            />
          </div>
          <button type="submit">Submit</button>
          <input name="form-number" type="hidden" value="7" />
        </fieldset>
      </form>
      <form action="/form-submit/" method="POST">
        <fieldset>
          <legend>Form 8 - Fanciness</legend>
          <div>
            Enter a number less than 50:
            <input id="lessthan50" name="lessthan50" type="text" />
          </div>
          <div>
            Double the above number:
            <input id="doubled" name="doubled" type="text" />
          </div>
          <div>
            Enter a date in the format (D, M YYYY):
            <input id="date-weird" name="date-weird" placeholder="d, m yyyy" type="text" />
          </div>
          <div>
            Enter the same word twice:
            <input data-form-submit-regex="([a-zA-Z]+)\W*(\1)" name="regex" placeholder="pizza pizza" type="text" />
          </div>
          <div>
            Enter two words so the top word comes first alphabetically:
            <input data-form-submit-group="alpha-input" id="alpha-left" name="alpha-left" type="text" />
            <input data-form-submit-group="alpha-input" id="alpha-right" name="alpha-right" type="text" />
            <div data-form-submit-error-for="alpha-input"></div>
          </div>
          <div>
            Check exactly three options:
            <input
              data-form-submit-group="checkbox-options"
              id="checkbox-option-1"
              name="checkbox-option-1"
              type="checkbox"
              value="1"
            />
            <label htmlFor="checkbox-option-1">1</label>
            <input
              data-form-submit-group="checkbox-options"
              id="checkbox-option-2"
              name="checkbox-option-2"
              type="checkbox"
              value="2"
            />
            <label htmlFor="checkbox-option-2">2</label>
            <input
              data-form-submit-group="checkbox-options"
              id="checkbox-option-3"
              name="checkbox-option-3"
              type="checkbox"
              value="3"
            />
            <label htmlFor="checkbox-option-3">3</label>
            <input
              data-form-submit-group="checkbox-options"
              id="checkbox-option-4"
              name="checkbox-option-4"
              type="checkbox"
              value="4"
            />
            <label htmlFor="checkbox-option-4">4</label>
            <input
              data-form-submit-group="checkbox-options"
              id="checkbox-option-5"
              name="checkbox-option-5"
              type="checkbox"
              value="5"
            />
            <label htmlFor="checkbox-option-5">5</label>
            <div data-form-submit-error-for="checkbox-options"></div>
          </div>
          <button type="submit">Submit</button>
          <input name="form-number" type="hidden" value="8" />
        </fieldset>
      </form>
      <script
        dangerouslySetInnerHTML={{
          __html: `'use strict';
// Note this code could be executed in the header using an on load function such as DOMContentLoaded or the event provided by jQuery.
formSubmit.addValidation(document.getElementById('lessthan50'), function(value, el) { // Number less than 50
  var num = parseInt(value);
  if (isNaN(num)) { // Invalid number
    return 'Invalid number';
  } else if (num == 50) {
    return '50 is not less than 50'; // As many messages as are necessary
  } else if (num >= 50) {
    return 'Number must be less than 50';
  }
  return ''; // Validated!
// formSubmit functions return the formSubmit object (when practical) for chaining
}).addValidation(document.getElementById('doubled'), function(value, el) { // Double less-than-50 input
  var num = parseInt(value),
      el50 = document.getElementById('lessthan50'),
      num50 = parseInt(el50.value);
  if (isNaN(num)) {
    return 'Invalid number';
  } else if (formSubmit.getErrorMessage(el50) || isNaN(num50)) {
    return 'Less than 50 field is invalid';
  } else if (num50 * 2 != num) {
    return 'Value ' + num + ' does not match expected value ' + (num50 * 2);
  }
  return '';
//
}).addValidation(document.getElementById('date-weird'), function(value, el) { // Weird date format
  var formattedStr;
  // If the date is in out expected format, leave it alone
  if (!formSubmit.validation.isDate(value, 'd, m yyyy')) {
    // Date was not in a valid format. Try to put it in a valid format.
    formattedStr = formSubmit.validation.formatDate(value, 'd, m yyyy');
    if (formSubmit.validation.isDate(formattedStr, 'd, m yyyy')) {
      // Formatted string is valid
      el.value = formattedStr;
    } else {
      return 'Please enter a date in the bizarre format "D, M YYYY"';
    }
  }
  return '';
}).addValidation('input[data-form-submit-group="alpha-input"]', function(value, el) { // Alphabetical inputs
  var alphaLeft = document.getElementById('alpha-left').value,
      alphaRight = document.getElementById('alpha-right').value;
  if (!alphaLeft.length || !alphaRight.length) {
    return 'Please enter a word in both boxes.';
  } else if (alphaLeft.toLowerCase() >= alphaRight.toLowerCase()) {
    // Injection protection is always enabled
    return '"' + alphaLeft + '" does not come before "' + alphaRight + '" alphabetically.';
  }
  return '';
}).addValidation('input[data-form-submit-group="checkbox-options"]', function(value, el) { // Checkbox options
  var checked = document.querySelectorAll('input[data-form-submit-group="checkbox-options"]:checked').length,
      difference = Math.abs(3 - checked);
  if (difference) {
    return 'Please ' + (checked < 3 ? 'check' : 'uncheck') + ' ' +
            difference.toString() + ' more ' +
            (difference == 1 ? 'option' : 'options');
  }
  return '';

});`,
        }}
      ></script>
      <form action="/form-submit/" method="POST">
        <fieldset>
          <legend>Form 9 - All optional</legend>
          <div>
            Enter one to ten digits:
            <input
              data-form-submit-count="true"
              data-form-submit-optional="digits"
              maxLength={10}
              name="digits-optional"
              type="text"
            />
          </div>
          <div>
            Any number:
            <input data-form-submit-optional="number" name="number-optional" type="text" />
          </div>
          <div>
            Currency:
            <input data-form-submit-optional="currency" name="currency-optional" type="text" />
          </div>
          <div>
            Phone number:
            <input
              data-form-submit-error-msg="Invalid phone number"
              data-form-submit-optional="phone"
              name="phone-optional"
              type="text"
            />
          </div>
          <div>
            ZIP code:
            <input
              data-form-submit-count="5"
              data-form-submit-error-msg="Invalid ZIP code"
              data-form-submit-optional="zip"
              name="zip-optional"
              type="text"
            />
          </div>
          <div>
            Email address:
            <input
              data-form-submit-error-msg="Invalid email address"
              data-form-submit-optional="email"
              name="email-optional"
              type="text"
            />
          </div>
          <div>
            Timestamp:
            <input
              className="wide-input"
              data-form-submit-error-msg="Invalid timestamp"
              data-form-submit-optional="timestamp"
              name="timestamp-optional"
              type="text"
            />
          </div>
          <div>
            Date:
            <input
              data-form-submit-error-msg="Invalid date, use MM/DD/YYYY"
              data-form-submit-optional="date-mmddyyyy"
              name="date-mmddyyyy-optional"
              type="text"
            />
          </div>
          <div>
            Date:
            <input
              data-form-submit-error-msg="Invalid date, use YYYY-MM-DD"
              data-form-submit-optional="date-yyyymmdd"
              name="date-yyyymmdd-optional"
              type="text"
            />
          </div>
          <div>
            Time:
            <input
              data-form-submit-error-msg="Invalid time"
              data-form-submit-optional="time"
              name="time-optional"
              type="text"
            />
          </div>
          <div>
            URL:
            <input
              className="wide-input"
              data-form-submit-error-msg="Please enter a valid URL"
              data-form-submit-optional="url"
              name="url-optional"
              type="text"
            />
          </div>
          <div>
            URL with http/https:
            <input
              className="wide-input"
              data-form-submit-error-msg="Please enter a valid HTTP URL"
              data-form-submit-optional="url-http"
              name="url-http-optional"
              type="text"
            />
          </div>
          <div>
            Path portion of URL (after first / after hostname):
            <input
              data-form-submit-error-msg="Please enter a URL path, the part of the URL after the hostname"
              data-form-submit-optional="url-path"
              name="url-path-optional"
              type="text"
            />
          </div>
          <div>
            Hostname:
            <input
              data-form-submit-error-msg="Please enter a valid hostname, ex www.google.com"
              data-form-submit-optional="hostname"
              name="hostname-optional"
              type="text"
            />
          </div>
          <div>
            Domain:
            <input
              data-form-submit-error-msg="Please enter a valid domain, ex google.com"
              data-form-submit-optional="domain"
              name="domain-optional"
              type="text"
            />
          </div>
          <div>
            IP Address:
            <input
              data-form-submit-error-msg="Please enter a valid IP address, ex 192.168.3.14"
              data-form-submit-optional="ip-address"
              name="ip-address-optional"
              type="text"
            />
          </div>
          <strong>Please only submit fictitious test data</strong>
          <div>
            Social security number:
            <input
              data-form-submit-error-msg="Please enter a valid SSN"
              data-form-submit-optional="ssn"
              name="ssn-optional"
              type="text"
            />
          </div>
          <div>
            ABA routing number (for ACH, bottom of checks):
            <input
              data-form-submit-count="true"
              data-form-submit-error-msg="Please enter a valid ABA routing number, ex. 081501696"
              data-form-submit-optional="aba-routing"
              maxLength={9}
              name="aba-routing-optional"
              type="text"
            />
          </div>
          <div>
            Credit card:
            <input
              data-form-submit-error-msg="Please enter a valid credit card number, ex 4111 1111 1111 1111"
              data-form-submit-optional="credit-card"
              name="credit-card-optional"
              type="text"
            />
          </div>
          <div>
            CVV (on back of credit card):
            <input
              data-form-submit-error-msg="Please enter a CVV number"
              data-form-submit-optional="cvv"
              name="cvv-optional"
              type="text"
            />
          </div>
          <button type="submit">Submit</button>
          <input name="form-number" type="hidden" value="9" />
        </fieldset>
      </form>
    </>
  )
}

export default FormSubmitExample
