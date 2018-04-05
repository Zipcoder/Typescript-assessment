# Type Script Assessment

In this assessment you have 1 hour to complete the following task:

### Level 1 (Basic Success)
1. Add jasmine and karma to the project so that you can run successful test
2. Create a service that has a public function called **wuTangIs()**, that returns a string with the value **"For the Children"**.
3. Successfully write a unit test for **wuTangIs()**

### Level 2 (PRIDE and LUNCH)

4. In the same service have a public funtion called **myFavoriteBand()**, that calls a http get endpoint which will return a string. 
5. Successfully write a unit test for  **myFavoriteBand()**, mocking out the http call.

### Level 3 (Take Tariq's personal money in a DISRESPECTFUL mannor)

6. In the same service have a public funtion called **newBandILIke(value)** , that accepts a String as a parameter, and calls a post endpoint.
7. Succesfully write a unit test for **newBandILIke(value)** and mock out the http call.

---

# Okay the explanation of what I did:

1. Okay first I installed jasmine and karma from "https://www.joshmorony.com/introduction-to-testing-ionic-2-applications-with-testbed/"

2. Then I created a provider through the terminal using: ionic g providers wutangforever
2.5 The wutangforever.ts was already created and had a constructor but not methods. I deleted what was in the 
2.6 constructor
3. Within the providers I created a wutangforever.ts and a wutangforever.spec.ts
4. Within wutangforever.ts I created 
    wuTang(){
        return "For the Children";
    }

5. I then went into wutangforever.spec.ts and created a test for the method wuTang()
    import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { WutangForeverProvider } from './wutangforever';
//import { providerDef } from '@angular/core';

describe('WuTangForeverProvider', () => {


  //inject the service
  let wutang = null;
  let HttpClient = null;
  describe('For the People', () => {
    it('should say For the Children', () => {
      let result = new WutangForeverProvider(HttpClient);
      expect(result.wuTang()).toEqual('For the Children')
    });
  });

  *** I had to import WutangForeverProvider 
  6. Then I ran that AFTER I fixed the zone

  it passed

   7. I then created the following methods:
    favoriteBand() - our get request
    newBandILIke<T>(item: any) - made it generic since I didn't know what TYPE of item I was getting back - our post'

   8. within those methods I returned - return this.httpClient.get(`http://test.api.here/blahblah/1`);(change the get to use a post)

   *** My mistake was I wasn't returning httpClient just http and httpClient initializes a new instance of the HttpClient class. 

   9. I then got some help with those tests because it was mainly syntax leading to the reason it wouldn't work. 

   Enjoy💕 