import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringConstantsService {
  symbol = "$RFP";
  name = "RewardForPassion";
  url = "www.rewardForPassion.com"


  constructor() { }

   getEstimatedGas(){
    return 0.0006;
  }
   getTokenPriceInUSD(){
    return "0.05"
  }
  getMBalance() {
      return "134980"
  
 }
getBalanceOf(){
  return "350030";
}

}
