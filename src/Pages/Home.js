import React, { Component } from "react";
// import { ReactDOM } from "react";
import Introduction from '.././components/Introduction';
import ReactFragmentComponent from '.././components/ReactFragment';
import ReactFragmentComponent2 from '.././components/ReactFragmentComponent2';
import ParentComponentWithouStateChange from '.././components/ParentChild/parentComponentWithoutStateChange';
import ParentComponentStateChange from '.././components/ParentChildWithStateChange/parentComponentStateChange';
import ParentHook from '.././components/Hooks/ParenHook';
import HeadingNavbar from '.././components/HeadingNavbar';
import Navbar from '.././components/Navbar';


class Home extends Component{
    render(){
      return<>
      
      
     

     

        <div class="container">
        <Introduction />
        <h3><br></br><hr></hr>Create React App</h3>

        <div class="row">
          <div class="col-sm-6">
            <br></br>
            <img style={{ height: "450px", width: "450px" }} src="https://img.freepik.com/free-vector/hand-drawn-flat-design-devops-illustration_23-2149375793.jpg" />
          </div>
          <div class="col-sm-6">
            <span class="text-muted"><b>Create React APP</b><br></br>It is a tool built by react developers to provide a structure for react</span><br></br>
            <br></br><span>Building a React App  <span class="badge badge-danger"> npx create-react-app myappname </span></span><br></br>
            <span>Running a React App  <span class="badge badge-success"> npm start </span></span>

            <h3><br></br>Directory Structure</h3>
            <li><span>node modules</span> : <small class="text-muted">It contains all the dependencies files.</small></li>

            <li>
              <span>public folder</span> : <small class="text-muted">It contains <b>manifest.json</b> <span>provides metadata </span>.</small>
              <br></br>
              <small class="text-muted" style={{ marginLeft: "124px" }}>It contains <b>index.html</b> <span>holds template for the whole app.</span>.</small>

            </li>
            <li>
              <span>src folder</span> : <small class="text-muted">It contains <b>App.js</b> <span>parent component of our react app</span>.</small>
              <br></br>
              <small class="text-muted" style={{ marginLeft: "100px" }}>It contains <b>App.css</b> <span>It is the css for the app.js.</span>.</small><br></br>
              <small class="text-muted" style={{ marginLeft: "100px" }}>It contains <b>App.test.js</b> <span>It is the test env for the app.</span>.</small><br></br>
              <small class="text-muted" style={{ marginLeft: "100px" }}>It contains <b>index.js</b> <span>It is the entry point for the app.</span>.</small><br></br>
              <small class="text-muted" style={{ marginLeft: "100px" }}>It contains <b>index.css</b> <span>It is the css for the index.js.</span>.</small>

            </li>
            <li>
              <span>package-lock.json</span> : <small class="text-muted">It is the version control for our react app.</small>
            </li>
            <li>
              <span>package.json</span> : <small class="text-muted">It contains all the records of dependencies for our react app.</small>
            </li>
            <br></br>

          </div>
        </div>
        <br></br>
        <br></br>
        <hr></hr>
        <br></br>
        <div className='row'>
          <div class="col-sm-6">

            <h3>PUBLIC FOLDER</h3>
            <small className='text-muted'>Our Public folder is not read or parsed by <b>Webpack</b>, Webpack read data only in src folder</small>
            <br></br>
            <span>
              To refernce to the public folder we needed to use <b>PUBLIC_URL</b><br></br>
              <small className='text-muted'> <b>eg</b> img href="%PUBLIC_URL%/sample_image"</small>
            </span>
            <br></br>

          </div>
          <div class="col-sm-6">
            <img src={process.env.PUBLIC_URL + '/redbull2.png'} alt='img' />

          </div>
        </div>
        <br></br>
        <br></br>
        <div class="card" >

          <div class="card-body">
            <h5 class="card-title">React Fragment</h5>
            <p class="card-text">Fragment is used to group a list of children without creating extra nodes in the DOM.</p>
            <div class="row">
              <div class="col-sm">
                <ReactFragmentComponent />
              </div>
              <div class="col-sm">
                <ReactFragmentComponent2 />
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <h2>Component Types</h2>
        <small className='text-muted'>JavaScript Functions</small><br></br>
        <small className='text-muted'>Accept Arbitrary Inputs called Props and return React elements</small>

        <li>Function Components</li>
        <li>Class Components</li>
        <br></br>
        <div class="row">
          <div class="col-sm">
            <div class="card alert alert-warning">
              <div class="card-body">
                <h5 class="card-title">Class Components</h5>
                <p class="card-text">Needs a requried method render() which has a return In which we pass the fragment or a view in jsx.</p>
                <p>They can access the state or lifecycle hook.</p>
                <p>They are generally used at places where state is to be changed .</p>

                <b>Without props</b>
                <p> {"class App extends Component{  "} <br></br> <span>  &nbsp;&nbsp; </span> {"render() { return <h1> Function Component </h1>; }"}<br></br>{" } "}</p>
                <b>With props</b>
                <p> {"class App extends Component{   "} <br></br> <span>  &nbsp;&nbsp; </span> {"render() { return <h1> { this.props.name } </h1>; }"}<br></br>{" } "}</p>
              </div>
            </div>
          </div>
          <div class="col-sm">
            <div class="card alert alert-info" >
              <div class="card-body">
                <h5 class="card-title">Function Components</h5>
                <p class="card-text">Accepts a single prop object argument with data and return React elements.</p>
                <p>They do not access the state or lifecycle hook.</p>
                <p>They are plain functions only .</p>
                <b>Without props</b>
                <p> {"const functionname = ()=> { "} <br></br> <span>  &nbsp;&nbsp; </span> {" return <h1> Function Component </h1>;"}<br></br>{" } "}</p>
                <b>With props</b>
                <p> {"const functionname = (props)=> { "} <br></br> <span>  &nbsp;&nbsp; </span> {" return <h1> { props.name }</h1>;"}<br></br>{" } "}</p>
              </div>
            </div>
          </div>

        </div>
        <hr></hr>

        <div class="row">
          <div class="col-sm">
            <div class="card">
              <div class="card-body">
                <h3>Props</h3>
                <li>Are not modifiable </li>
                <li>Are Read Only </li>
                <br></br>
                <b>Passing of props</b><br></br>
                <small class='text-muted'>
                  <b>{'<StudentComponent name="Anshul />"'}</b>
                  <br></br>
                  Here <b>name</b> is prop passed to StudentComponent
                </small>
                <br></br><br></br>
                <b>Passing of props in composition</b><br></br>
                <small class='text-muted'>
                  <b>{'<StudentComponent >I am Child </StudentComponent>"'}</b>
                  <br></br>
                  Here this <b>I am child</b> is fetched by Component as<br></br><b>{' {props.children} or {this.props.children}'}</b>
                </small>


              </div>
            </div>
            <br></br>
            <div class="card alert alert-success">
              <div class="card-body">
                <h5 class="card-title">Class Components</h5>
                <small>They have access to states and props and thus eventdriven chsnges is done by thm only </small>
              </div>
            </div>

          </div>
          <div class="col-sm">

            <div class="card">
              <div class="card-body">
                <h3>State</h3>
                <li>Are  modifiable and edited. </li>
                <li>Are Accessed by Only ClassComponents</li>
                <br></br>
                <b>Two ways to use them</b><br></br>
                <small class='text-muted'>
                  <b><li>Inside Class</li></b>
                  <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'state = { '}</b><br></br>
                  <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'name : "Anshul" ,'}</b><br></br>
                  <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'prop1 : this.props.prop1 '}</b><br></br>
                  <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'} '}</b><br></br>

                  <b><li>In Constructor</li></b>
                  <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'constructor(props){ '}</b><br></br>
                  <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' super(props); '}</b><br></br>

                  <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'this.state = { '}</b><br></br>
                  <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'name : "Anshul" ,'}</b><br></br>
                  <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'prop1 : this.props.prop1 '}</b><br></br>
                  <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'} '}</b><br></br>
                  <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'} '}</b>

                  <br></br>
                </small>
                <b>To get data</b><br></br>
                <small class='text-muted'>
                  <b>{'<h2> {this.state.prop1} </h2>'}</b>
                </small>


              </div>
            </div>

          </div>
        </div>
        <br></br>
        <hr></hr>
        <br></br>
        <h2>EVENT HANDLING</h2>
        <small>handling event in JSX is same as in HTML but there is one differnce.</small>
        <br></br>
        <br></br>
        <b>In HTML  &nbsp;:</b>   <span class="badge badge-primary">onclick="handleClick()"</span>
        <br></br>
        <br></br>
        <b>In REACT : Function Component </b>   <span class="badge badge-success">onClick={'{handleClick}'}"</span>
        <br></br>
        <b>Passing parameter : </b>   {'onClick={ handleClick("101") }'}
        <br></br>
        <br></br>
        <b>In REACT : Class    Component </b>   <span class="badge badge-danger">onClick={'{this.handleClick}'}"</span>
        <br></br>
        <b>Passing parameter : </b>   {'onClick={ this.handleClick("101") }'}
        
        
        <br></br>
        <hr></hr>
        <br></br>
        <h2>TO PREVENT DEFAULT FUNCTION</h2>
        <small>handling event in JSX is same as in HTML but there is one differnce.</small>
        <br></br>
        <br></br>
        <b>In HTML  &nbsp;:</b>   <span class="badge badge-primary">{'<a href="#" onclick="console.log("Clicked") return false;" />'}</span>
        <br></br>
        <b>In REACT : </b>  <br></br>
        <b>Class Component</b><br></br>{'<a href="#" onClick="{ (e)=>this.handleClick(e) }" />'}
        <br></br>
        <small className='text-muted'>
          {' function handleclick(e){'}<br></br>&nbsp;&nbsp;&nbsp;{'e.preventDefault();'}<br></br>&nbsp;&nbsp;&nbsp;{'console.log("clicked"); '}<br></br>{'}'}
        </small>
        <br></br>
        <b>Function Component</b><br></br>{'<a href="#" onClick="{ (e)=>handleClick(e) }" />'}
        <br></br>
        <small className='text-muted'>
          {' function handleclick(e){'}<br></br>&nbsp;&nbsp;&nbsp;{'e.preventDefault();'}<br></br>&nbsp;&nbsp;&nbsp;{'console.log("clicked"); '}<br></br>{'}'}
        </small>


        <br></br>
        <hr></hr>
        <br></br>
        <h2>STATE UPDATION</h2>
        <small>State updation only possibel in case of class component</small>
        <br></br>
        <br></br>
        <b>State Declaration :  </b>   <span class="badge-success p-1">{'this.state= { "name":"Anshul" }; '}</span>
        <br></br>
        <br></br>

        <b>State Updation : </b>   <span class=" badge-danger p-1">{'this.setState( {"name":"Joi" } ); '}</span>
        <br></br>
        <small>OR</small>
        <br></br>

        <b class=" ">{'this.setState( function(state,props) { consoel.log(stat); } ); '}</b>
        <br></br>
        <br></br>
        <small>State updation done on an event</small>
        
      </div>
      <br></br>
      <div class="container">
        <h1 style={{ color: "blue" }}>Important Things in React Class Component</h1><br></br>
        <h2># Phases Of Component</h2>
        <br></br>
        <div class="table-responsive  table-striped">
          <table class="table">
            <thead>
              <tr>
                <th>Index</th>
                <th>Mehtod Name</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mounting</td>
                <td>Process of creaating an element and inserting in DOM Tree</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Updating</td>
                <td>Updating is the process of changing the state or props component and update changes to node JS already in the DOM</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Error Handling</td>
                <td>When ther is error during rendering , in Lifeccle method or in the constructor of any child component</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Unmounting</td>
                <td>Process of removing an element and deleting from DOM Tree</td>
              </tr>

            </tbody>
          </table>
        </div>
        <br></br>
        <br></br>
        <img src={process.env.PUBLIC_URL + "React-Components-Lifecycle.png"} style={{ height: "500px", width: "100%" }}></img>
        <br>
        </br>
        <br></br>
        <hr></hr>
        <h1><u>LEtS GO TO EACH METHOD ONE BY ONE</u></h1>
        <br></br>
        <br></br>

        <h3><b class=""># Mounting</b> &nbsp;&nbsp;<br></br><br></br>
          <small class="badge badge-primary" >constructor()</small>&nbsp;
          <small class="badge badge-secondary">getDerievedStateFromProps()</small>&nbsp;
          <small class="badge badge-success">render()</small>&nbsp;
          <small class="badge badge-danger">componentdidMount()</small>&nbsp;
          {/* <small class="badge badge-warning">Warning</small>
          <small class="badge badge-info">Info</small>
          <small class="badge badge-light">Light</small>
          <small class="badge badge-dark">Dark</small> */}
        </h3>
        <br></br>


        <div class=" p-2" style={{ border: "1px solid black" }} >

          <div class="row">

            <div class="col-4">
              <div class="list-group" id="list-tab" role="tablist">
                <a class="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">Constructor</a>
                <a class="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">static getDerievedStateFromProps( state , props )</a>
                <a class="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages">render()</a>
                <a class="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings">componentdidMount()</a>
              </div>
            </div>
            <div class="col-8" style={{ border: "1px solid black", padding: "10px" }}>
              <div class="tab-content" id="nav-tabContent">
                <div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">
                  <span>
                    <b>Information</b>
                    <li>Called Before a component is Mounted </li>
                    <li>You should call <b>super(props)</b> at the very first to access the props <br></br> &nbsp;&nbsp;&nbsp;&nbsp; Otherwise it will lead to bugs.</li>
                    <b>Uses</b>
                    <li>Binding the event handler method  </li>
                    <li>Initializing the local state.  </li>

                  </span>

                </div>
                <div class="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">
                  <span>
                    <b>Information</b>
                    <li>Invoked right before calling the render method</li>
                    <li>Called on <b>mount</b> & <b>Subsequent Updates</b>  </li>
                    <li>No Access to component instance</li>
                    <li>Since it is static so no need to use this</li>
                    <li>If there is any change done here in state then it should be returned or else <b>null</b></li>
                    <b>Uses</b>
                    <li>If a change is done in state or parent component and that state is shared by the child component then to reflect the changes it is used </li>
                    {/* <li>  </li> */}

                  </span>
                </div>
                <div class="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">
                  <b>Information</b>
                  <li>Render is called after getDerievedStateFromProps</li>
                  <li>It is used to return the view part of a website.</li>
                  <b>Uses</b>
                  <li>Return a view in JSX </li>
                </div>
                <div class="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">
                  <b>Information</b>
                  <li>It is a method called after render()</li>
                  <li>Called when page is loaded </li>
                  <b>Uses</b>
                  <li>This is where Ajax Requests are written</li>
                  <li>It is used to call a function with delayed execution like <b>setTimeOut</b> or <b>setInterval</b></li>
                </div>
              </div>
            </div>
          </div>
          <br></br>
        </div>
        <hr></hr>
        <br></br>
        <h3><b class=""># Updating</b> &nbsp;&nbsp;<br></br><br></br>
          <small class="badge badge-warning" >getDerievedStateFromProps()</small>&nbsp;
          <small class="badge badge-info">shouldComponentUpdate()</small>&nbsp;
          <small class="badge badge-dark">render()</small>&nbsp;
          <small class="badge badge-success">getSnapshotBeforeUpdate()</small>&nbsp;
          <small class="badge badge-danger">componentdidUpdate()</small>&nbsp;
          {/* <small class="badge badge-warning">Warning</small>
          <small class="badge badge-info">Info</small>
          <small class="badge badge-light">Light</small>
          <small class="badge badge-dark">Dark</small> */}
        </h3>
        <br></br>


        <div class=" p-2" style={{ border: "1px solid black" }} >

          <div class="row">

            <div class="col-4">
              <div class="list-group" id="list-tab" role="tablist">
                <a class="list-group-item list-group-item-action active" id="list-getDerievedStateFromProps-list" data-toggle="list" href="#list-getDerievedStateFromProps" role="tab" aria-controls="home2">getDerievedStateFromProps(state,props)</a>
                <a class="list-group-item list-group-item-action" id="list-shouldComponentUpdate-list" data-toggle="list" href="#list-shouldComponentUpdate" role="tab" aria-controls="profile2">shouldComponentUpdate()</a>
                <a class="list-group-item list-group-item-action" id="list-render-list" data-toggle="list" href="#list-render" role="tab" aria-controls="render">render()</a>
                <a class="list-group-item list-group-item-action" id="list-componentdidupdate-list" data-toggle="list" href="#list-componentdidupdate" role="tab" aria-controls="componentdidupdate">componentdidUpdate()</a>
              </div>
            </div>
            <div class="col-8" style={{ border: "1px solid black", padding: "10px" }}>
              <div class="tab-content" id="nav-tabContent">
                <div class="tab-pane fade show active" id="list-getDerievedStateFromProps" role="tabpanel" aria-labelledby="list-getDerievedStateFromProps-list">
                  <span>
                    <b>Information</b>
                    <li>Invoked right after changing the state</li>
                    <li>Called on <b>mount</b> & <b>Subsequent Updates</b>  </li>
                    <li>No Access to component instance</li>
                    <li>Since it is static so no need to use this</li>
                    <li>If there is any change done here in state then it should be returned or else <b>null</b></li>
                    <b>Uses</b>
                    <li>If a change is done in state or parent component and that state is shared by the child component then to reflect the changes it is used </li>
                    {/* <li>  </li> */}

                  </span>

                </div>
                <div class="tab-pane fade" id="list-shouldComponentUpdate" role="tabpanel" aria-labelledby="list-shouldComponentUpdate-list">
                  <span>
                    <b>Information</b>
                    <li>Called after getDerivedStateFromProps </li>
                    <li>You should call it to avoid changes in certain props value by default its <b>True</b></li>
                    <b>Uses</b>
                    <li>Called to reflect the component changes or not on state change </li>
                    {/* <li>Initializing the local state.  </li> */}

                  </span>


                </div>
                <div class="tab-pane fade" id="list-render" role="tabpanel" aria-labelledby="list-render-list">
                  <b>Information</b>
                  <li>Render is called after shouldComponentUpdate</li>
                  <li>It is used to return the view part of a website.</li>
                  <b>Uses</b>
                  <li>Return a view in JSX </li>
                </div>
                <div class="tab-pane fade" id="list-componentdidupdate" role="tabpanel" aria-labelledby="list-componentdidupdate-list">
                  <b>Information</b>
                  <li>It is a method called at the last</li>
                  <li>Called when update is done </li>
                  <b>Uses</b>
                  <li>This is where libraries or AJAX Requests are written to send response to Server</li>
                  <li>It is used to call a function with change on actions</li>
                </div>
              </div>
            </div>
          </div>
          <br></br>
        </div>
        <br></br>
        <div class="container">
          <h2># <u>Use Of <b style={{ color: "red" }}>getDerivedStateFromProps( nextProps , prevState ) </b>In Class Components </u></h2>
          <br></br>
          <div class="row">
            <div class="col-sm" >
              <ParentComponentWithouStateChange />
            </div>
            <div class="col-sm">
              <ParentComponentStateChange />
            </div>
          </div>

        </div>
        <br></br><br></br>
        <h3><b class=""># Unmounting</b> &nbsp;&nbsp;<br></br><br></br>
          <small class="badge badge-success" >componentWillUnmount()</small>&nbsp;

          {/* <small class="badge badge-warning">Warning</small>
          <small class="badge badge-info">Info</small>
          <small class="badge badge-light">Light</small>
          <small class="badge badge-dark">Dark</small> */}
        </h3>
        <span>
          <b>Information</b>
          <br></br>
          <li>It is called when A component is unmounted.</li>
          <b>Uses</b>
          <li>It is useful when we had to get timeout or any such thing like last login.</li>
        </span>
        <br></br>
        <hr></hr>


      </div>
      <div class="container alert-danger">
        <br></br><br></br>

        <h1 style={{ color: "red" }}><b><u># Hooks</u></b></h1>
        <span>
          <br></br>

          <li>Hooks are special features that lets you use lifecycle methods in function components.</li>
          <li>They cannot be used in Class Components</li>
          <li>It is useful when we had to add a state in function.</li>
          <br></br>
        </span>
        <h4>Rules Of Hooks</h4>
        <li>Only called at the top level</li>
        <p style={{ marginLeft: "20px" }}>One Should not call inside loops or condition statements or nested loops</p>
        <li>Hooks do not work in class Components</li>
        <li>Call hooks from the React functions not JS Function </li>
        <li>React relies in the order in which hooks are called</li>

        <br></br><br></br>
        <div class="container p-3">
          <div class="row">
            <div class="col-sm">
              <h2><u>useState()</u></h2>
              <li>It is used for declaring the hooks</li>
              <li>Allows you create a state in function component</li>
              <li>Returns two things : <br></br>  = A variable to hold state value<br></br>= A function to update the state value</li>
              <br></br>
              <b><h3>Example</h3></b>

              <b>const [name,setName] = useState("Rahul");</b><br></br>
              We can get the value by <b> name  </b>
              <br></br>
              We can update the value by <b>setName("Anshul")</b><br></br>
              <br></br>
            </div>
            <div class="col-sm">
              <h2><u>useEffect()</u></h2>
              <li>Encapsulate code that has Effects</li>
              <b>Like</b>
              <li>componentdidMount</li>
              <li>componentdidUpdate</li>
              <li>componentWillUnmount</li>
              <b>Use</b><br></br>
              <b>useEffect(function,Array) </b><br></br>
              Function passed will run after render is done <br></br>
              <b>call Api , render something after render</b>
              <br></br>
            </div>
          </div>
          <div class="container p-3" style={{ height: "300px", backgroundColor: "white" }}>
            <h2>Example</h2>
            <ParentHook count={0}/>
          </div>


        </div>
        <br></br>
      </div>
      {/* <div style={{ height: "300px" }}></div> */}
        </>
    }
}
export default Home