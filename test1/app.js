console.log('Hi');

/*var template = (
  <h1>Indecision App</h1>
  <p>Sub title</p>
  <ol>
    <li>Option1</li>
    <li>Option2</li>
  </ol>
);

var template2 = ( 
  <h1>Suchetha</h1>
  <p>Age: 24</p>
  <p>location: Bengalury</p>
);*/

var content1 = {
  heading: "Indecision App",
  subtitle: "Sub title"
};

var user = {
 name: "Suchetha",
 age: 24,
 location: "Bengaluru"
};
/*var template = (
  <h1>{content1.heading}</h1>
  <p>{content1.subtitle}</p>
  <ol>
    <li>Option1</li>
    <li>Option2</li>
  </ol>
);

var template2 = ( 
  <h1>{user.name}</h1>
  <p>Age: {user.age}</p>
  <p>location: {user.location}</p>
);*/

/*var template = (
  <h1>content1.heading</h1>
  {content1.subtitle ? content1.subtitle : "Anonymous"}
  <ol>
    <li>Option1</li>
    <li>Option2</li>
  </ol>
);

var template2 = ( 
  <h1>user.name</h1>
  <p>Age: user.age</p>
  <p>location: user.location</p>
);*/




var approot = document.getElementById("demo");
ReactDOM.render(template, approot);
