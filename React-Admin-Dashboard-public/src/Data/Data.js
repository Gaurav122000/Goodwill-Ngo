
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";

// Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilUpload,
} from "@iconscout/react-unicons";



//Total Donation

export default function TotalDonation(){
  


// return(donate.length)

}    


// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
  },
  {
    icon: UilClipboardAlt,
    heading: "Donations",
  },
  {
    icon: UilUsersAlt,
    heading: "Contributors",
  },
  {
    icon: UilPackage,
    heading: 'Queries'
  },
  {
    icon: UilChart,
    heading: 'Feedback'
  },
  {
    icon: UilUpload,
    heading: 'Upload',
    link : "/Upload"
  },
];

// Analytics Cards Data
export const cardsData = [
  
  {
    title: "Donations Collected",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    value:"0",
    png: UilUsdSquare,
    link:"/Table"
    
  },
  {
    title: "Query List",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    value: "0",
    png: UilMoneyWithdrawal,
   
  },
  {
    title: "Volunteer List",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    value:"0",
    png: UilClipboardAlt,
    link:"/Volunteer"
  },
];

// UploadCards Data

export const UploadCardsData=[
  {
    title: "Upload Blogs",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    }
  },
  {
    title: "Upload Picture",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    }
  },{
    title: "Update Contacts",
    color: {
      backGround:"linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    }
  },
  
]

// Recent Update Card Data
// export const UpdatesData = [
//   {
//     img: img1,
//     name: "Andrew Thomas",
//     noti: "has ordered Apple smart watch 2500mh battery.",
//     time: "25 seconds ago",
//   },
//   {
//     img: img2,
//     name: "James Bond",
//     noti: "has received Samsung gadget for charging battery.",
//     time: "30 minutes ago",
//   },
//   {
//     img: img3,
//     name: "Iron Man",
//     noti: "has ordered Apple smart watch, samsung Gear 2500mh battery.",
//     time: "2 hours ago",
//   },
// ];
