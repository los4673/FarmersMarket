const mongoose = require("mongoose");
const db = require("../models");

// Seed file for DB
mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/farmersMarket"
);

const farmersSeed = [
  {
    name: "Taylor Farms Pacific",
    location: "1820 N MacArthur Dr, Tracy, CA 95376",
    picURL: "https://lh5.googleusercontent.com/p/AF1QipNL0pHz1GjLRRXo6NTCJ8IPjHuf-UUulsuMiz8T=w408-h544-k-no",
    ethAddress: "0x0071ae6cd1056E80eC33efcad241b5087b44230F",
    inventory: 4,
    price: 2,
    date: new Date(Date.now())
  },
  {
    name: "Wester Growers",
    location: "1415 L st Suite 1060, Sacramento, CA 95814",
    picURL: "https://geo3.ggpht.com/cbk?panoid=JVBnJO0avufWsttpus_LEw&output=thumbnail&cb_client=search.TACTILE.gps&thumb=2&w=408&h=200&yaw=21.140379&pitch=0&thumbfov=100",
    ethAddress: "0xE97C88a3AFcB42d9aec3FD75135dEd0CDb8e3328",
    inventory: 4,
    price: 2,
    date: new Date(Date.now())
  },
  {
    name: "Soil Born Farms",
    location: "2140 Chase Dr, Rancho Cordova, CA 95670",
    picURL: "https://lh5.googleusercontent.com/p/AF1QipMVmT0rYBdxwjeTNzzWFKwvdtb0489oROecB_ex=w408-h306-k-no",
    ethAddress: "0x53e20cDb3FEA47c6f92cD5d33838C4f89fbe94E3",
    inventory: 4,
    price: 2,
    date: new Date(Date.now())
  },
  {
    name: "Rockwood Glen Farm",
    location: "2015 Rockwood Dr, Sacramento, CA 95864",
    picURL: "https://lh5.googleusercontent.com/p/AF1QipMEi3buX3JrDnWVortjfy7TmdtSo7C2rThYvb40=w408-h306-k-no",
    ethAddress: "0xB907B7459a04D698B8FE98AF77d5C5dE861c10aa",
    inventory: 4,
    price: 2,
    date: new Date(Date.now())
  },
  {
    name: "Root Cause Farm",
    location: "685 Lighthouse Dr, West Sacramento, CA 95605",
    picURL: "https://geo1.ggpht.com/cbk?panoid=Wq7kUdccwHEpQSkdlEcpDA&output=thumbnail&cb_client=search.TACTILE.gps&thumb=2&w=408&h=200&yaw=5.085765&pitch=0&thumbfov=100",
    ethAddress: "0x05dd195F11125197B6c63F43efbc4Efb73c0219A",
    inventory: 4,
    price: 2,
    date: new Date(Date.now())
  },
  {
    name: "North Valley Farms",
    location: "926 J St, Sacramento, CA 95814",
    picURL: "https://geo3.ggpht.com/cbk?panoid=5APmsFojR9hYTxfk3vQrMA&output=thumbnail&cb_client=search.TACTILE.gps&thumb=2&w=408&h=200&yaw=192.94106&pitch=0&thumbfov=100",
    ethAddress: "0x64961Ce05dD8c6564138d1e50D68C326222317BE",
    inventory: 4,
    price: 2,
    date: new Date(Date.now())
  },
  {
    name: "Elderberry Farms",
    location: "2140 Chase Dr, Rancho Cordova, CA 95670",
    picURL: "https://lh5.googleusercontent.com/p/AF1QipPiE1TswY-5GshDp3QEZxsbX1F4UokyrVERNgJe=w408-h306-k-no",
    ethAddress: "0xfa936391eF3b2FfD19E5F5917fd8F5DACD65D9f2",
    inventory: 4,
    price: 2,
    date: new Date(Date.now())
  },
  {
    name: "Kent Lang Farms",
    location: "21548 Old River Rd, West Sacramento, CA 95691",
    picURL: "https://lh5.googleusercontent.com/p/AF1QipPzMw9ArHiuMu1ibSJKpoFUxwDP9-GYqxoHENDH=w408-h544-k-no",
    ethAddress: "0xC2D03962647F19a3A2b059DDB15d38F61b16512e",
    inventory: 4,
    price: 2,
    date: new Date(Date.now())
  },
  {
    name: "Mahon Ranch",
    location: "10171 Grant Line Rd, Elk Grove, CA 95624",
    picURL: "https://geo0.ggpht.com/cbk?panoid=VYauMoXNJIIsinjdcqVaOA&output=thumbnail&cb_client=search.TACTILE.gps&thumb=2&w=408&h=200&yaw=131.49442&pitch=0&thumbfov=100",
    ethAddress: "0x469BE4Bd7FcE34E39EB778C27Fa66285B2d4E435",
    inventory: 4,
    price: 2,
    date: new Date(Date.now())
  },
  {
    name: "Panoshe Ranch",
    location: "8151 Exelsior Rd, Sacramento, CA 95829",
    picURL: "https://lh3.googleusercontent.com/proxy/izZMtGowhQu4z3l1Bo4oDpX7hK5czRtTD3jXKE-yX2AmfaeIIc_-KIU6JXfDp3yMhVVSQfDeHLbxU9evjNM-RodIanFaaTPdtXEbIuQQUIRX9bOjIg3Aiq9C7MQijRZK933Y3PbOKbC_j6ycgXOXXzgUqgsQwPg=w408-h388-k-no",
    ethAddress: "0xE78eE76F4c2bB8a3E151eE03c09A64B4d1a2BFAf",
    inventory: 4,
    price: 2,
    date: new Date(Date.now())
  }
  
  
];

const userSeed = [
  {
    firstName: "Carlos",
    lastName: "R",
    email: "test@gmail.com",
    password: "helloapp1234",
    company: "Walmart",
    ethAddress: "0xbAc1c860270667d9a9F48626f0CAEFad94e8Df60",
  }
];
// Insert seed into DB
db.Farmer
  .remove({})
  .then(() => db.Farmer.collection.insertMany(farmersSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
  
  // Insert seed into DB
  db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
