import React from 'react'
import Card from '../atom/card';
import './userCards.css'



export default function UserCards(){
    const data = [
        {
          image:
            "https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=2048x2048&w=is&k=20&c=YmjrR4r6G_4XUliPPK3PPLHrkqKLvSY2D3ZEQewLZ38=",
          name: "Pritesh Kumar , IIT Delhi      ",
          designation: "CTO @FunctionUP",
          experience: "9 Yrs Exp",
        },
        {
          image:
            "https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=2048x2048&w=is&k=20&c=uEaEqFvI74GpTWzcRCiDMR3qWqS2qVzKQREVBgmcxao=",
          name: "Anubhav Singh , IIT Kanpur      ",
          designation: "Co-founder @ Dubdub.ai",
          experience: "7 Yrs Exp",
        },
        {
          image:
            "https://media.istockphoto.com/id/1370020940/photo/portrait-of-successful-businessman.jpg?s=1024x1024&w=is&k=20&c=v6d8sY7gEOr8iVZHi0VPX0JlxQzY5unspcXD8irZmj8=",
          name: "Aviral Sharma , IIT Delhi      ",
          designation: "Data Scientist Manager @ Optum",
          experience: "6 Yrs Exp",
        },
        {
          image:
            "https://www.shutterstock.com/image-photo/close-photo-charming-guy-entrepreneur-260nw-1531460651.jpg",
          name: "Rahul Garg , IIT Kanpur      ",
          designation: "Co-founder @ Dubdub.ai",
          experience: "8 Yrs Exp",
        },
        {
          image:
            "https://media.gettyimages.com/id/1179420343/photo/smiling-man-outdoors-in-the-city.jpg?s=612x612&w=gi&k=20&c=n663L5A4XlwcUvNpX_eu4ur1sMmrD6dt_c1mbWjrLXk=",
          name: "Uddhav Bamba , IIT Dhanbad      ",
          designation: "Applied Scientist @ Amazon   ",
          experience: "4 Yrs Exp",
        },
        {
          image:
            "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",
          name: "Gaurav Agarwal,IIT Delhi      ",
          designation: "Senior Data Scientist @ Tredence",
          experience: "5 Yrs Exp",
        },
        {
          image:
            "https://media.istockphoto.com/id/1270067126/photo/smiling-indian-man-looking-at-camera.jpg?s=612x612&w=0&k=20&c=ovIQ5GPurLd3mOUj82jB9v-bjGZ8updgy1ACaHMeEC0=",
          name: "Anchal Jaiswal,IIT Kanpur      ",
          designation: "Senior Data Scientist @ Sharechat ",
          experience: "3 Yrs Exp",
        },
        {
          image:
            "https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=2048x2048&w=is&k=20&c=uEaEqFvI74GpTWzcRCiDMR3qWqS2qVzKQREVBgmcxao=",
          name: "Rahul Sankhwar,IIT Kanpur      ",
          designation: "Founder FunctionUp",
          experience: "1 Yrs Exp",
        },
        {
          image:
            "https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=2048x2048&w=is&k=20&c=uEaEqFvI74GpTWzcRCiDMR3qWqS2qVzKQREVBgmcxao=",
          name: "Rahul Sankhwar,IIT Kanpur      ",
          designation: "Founder FunctionUp",
          experience: "1 Yrs Exp",
        }
      ];


      return (
        <div className='cards'>
        {data.map((item, index) => {
          return (
            <Card
              key={index}
              image={item.image}
              name={item.name}
              designation={item.designation}
              experience={item.experience}
            />
          );
        })}
        </div>
      );
      
}