Pre-requisite:
npm install --global mocha    // To install mocha locally, skip this step if mocha is alraedy installed.  
npm intall                    // To install other dependencies like chai, chai-http to run tests.

Contents:
TestPlan_ItemPage.xlsx        // Contains the Limited Test Plan with 10 Test cases to verify Walmart Item Page
test.js                       // Javascript contains the mocha chai tests

Test Output for test.js:

# mocha /Users/sree/Desktop/WalmartTest/test.js --r


  Walmart Item Test
    ✓ Must navigate to Walmart webpage for Item# 6000166640889 (726ms)

  Verify Webpage Details
    ✓ Response Status Code must be 200
    ✓ Must contain logo
    ✓ Response Status Code must be 400


  4 passing (743ms)
