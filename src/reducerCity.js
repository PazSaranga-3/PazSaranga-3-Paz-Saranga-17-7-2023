// let id = 0;
export default function reducerCity(state = 'Tel Aviv', action) { // state = [] , action = {type,payload={}}
  switch (action.type) {
    case 'changeCity':
      return  action.payload
      
    default:
      return state;
  }





}



// const example = (num = 0 ) => { // אפשר להגדיר לפונקציה ערך דיפולטיבי למקרה שלא נשלח אלייה כלום, במקרה שלנו רואים שזה אפס
//   console.log(num);
// }

// אפשר גם לקרוא לשני פונקציות באותו שם, ופי כמות המשתנים שהם מקבלים יוחלט לאיזה פוקנציה לפנות לפי המסםר של המשתנים שישלח