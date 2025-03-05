
//import propTypes from 'prop-types';

// function List(){
function List(props){
    // const fruits=["orange","apple","banana","grapes","mango","kiwi"];
    // fruits.sort();
    // const listItems=fruits.map((fruit)=><li>{fruit}</li>);
    // return(<ol>{listItems}</ol>);
    // return(<>{fruits}</>);

    //  const fruits=[{id:1,name:"orange",calories:30},
    //     {id:2,name:"apple",calories:40},
    //     {id:3,name:"banana",calories:50},
    //     {id:4,name:"grapes",calories:60},
    //     {id:5,name:"mango",calories:70},
    //     {id:6,name:"kiwi",calories:80}];

        // fruits.sort((a,b)=>a.name.localeCompare(b.name));//alphabetical order
        //fruits.sort((a,b)=>b.name.localeCompare(a.name));//reverse alphabetical order
// fruits.sort((a,b)=>a.calories-b.calories);//ascending order
// fruits.sort((a,b)=>b.calories-a.calories);//descending order reverse numeric
        
        //useing map
        // const listItems=fruits.map((fruit)=><li key={fruit.id}>{fruit.name}:&nbsp;
        // <b>{fruit.calories}</b></li>);
        // return(<ol>{listItems}</ol>);


        //using filter
        // const lowCaloriesFruits=fruits.filter(fruit=>fruit.calories<=50);
        // const listItems=lowCaloriesFruits.map((lowCaloriesFruit)=><li key={lowCaloriesFruit.id}>
        //     {lowCaloriesFruit.name}:&nbsp;
        //     <b>{lowCaloriesFruit.calories}</b>
        // </li>);
        // return(<ol>{listItems}</ol>);

    //     const highCaloriesFruits=fruits.filter(fruit=>fruit.calories>=50);
    //     const listHighCaloriesItems=highCaloriesFruits.map((highCaloriesFruit)=><li key={highCaloriesFruit.id}>
    //             {highCaloriesFruit.name}:&nbsp;
    //         <b>{highCaloriesFruit.calories}</b>
    //         </li>)
    // return(<ol>{listHighCaloriesItems}</ol>);

    const itemList=props.items;
    const category=props.category;
    const listitems=itemList.map(item => <li key={item.id}>
        {item.name}:&nbsp;
        <b>{item.calories}</b>
        </li>);
        return(<><h1 className="list-category">{category}</h1><ol className="list-items">{listitems}</ol></>);
        
}
//  List.propTypes={
//     category:propTypes.string,
//     items:propTypes.arrayOf(propTypes.shape({id:propTypes.number,
//         name:propTypes.string,
//         calories:propTypes.number})),
        
//     }
// List.defaultProps={
//     category:"Category",
//     items:[]};//default props

   

export default List;