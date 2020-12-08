import './App.css';
import HelloWorld from './HelloWorld';
import HelloNikki from './HelloNikki';
import QuestionOne from './QuestionOne';
import Waffles from './Waffles';
import QuestionTwo from './QuestionTwo'
import Pancakes from './Pancakes'
import Classmate from './Classmate'
import Dino from './Dino'

// const otherClassMates = ['Rome', 'Mike'];
// const displayOtherClassMates = otherClassMates.map((eachClassMate, idx) => {
//   return <Classmate location="Atlanta" name={eachClassMate} key={idx}/>
//   });

function App(props) {
  return (
    <div className="App">
      {/* <HelloWorld />
      <HelloNikki />
      <QuestionOne />
      <Waffles />
      <QuestionTwo />
      <Pancakes />
      <Classmate name="Carolina" location="Columbia"/>
      <Classmate name="Ruben" location= "New York"/>
      <Classmate name="Ashton" location="sorry I forgot was it Michigan"/> */}
      {/* {displayOtherClassMates} */}
    {/* <h1>{props.post.title}</h1>
    <p>by {props.post.author}</p>
    <p>{props.post.body}</p>
    <h2>Comments</h2>
    <p>{props.post.comments}</p> */}
    <Dino title={props.post.title}
    author={props.post.author}
    body={props.post.body}
    comments={props.post.comments}/>
    </div>
  );
}

export default App;
