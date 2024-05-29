/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const token =[]

function mintNFT (area,location,rate,price,bling) {
  const tokenvar={
    "Area":area,
    "Location":location,
    "Rate":rate,
    "Price":price,
    "Bling":bling
    
  }
  token.push(tokenvar);
  console.log(area+" stored successfully");
}

// create a "loop" that will go through an "array" of NFT's

function listNFTs () {
  for(let i=0;i<token.length;i++){
    console.log("\nID: "+(i+1));
    console.log("Area :\t\t" +token[i].Area);
    console.log("Location :\t"+token[i].Location);
    console.log("Rate : \t\t"+token[i].Rate);
    console.log("Price : \t"+ token[i].Price);
    console.log("Bling :\t\t"+token[i].Bling);
    
  }

}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
  console.log("\n"+token.length);

}

// call your functions below this line
mintNFT("kharar","chandigarh",9000,850000,"ruby");
mintNFT("modern valley","mohali",9000,850000,"gold");
mintNFT("omega","amritsar",9000,850000,"diamond");
listNFTs();
getTotalSupply();
