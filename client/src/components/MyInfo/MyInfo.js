import React from 'react'
import './MyInfo.css'


const MyInfo = props => {
  console.log(props)
  return (<div className="row">
    <div className="row">
    <h3>About me</h3>
      <div className="col-sm-12 aboutMe profileAboutDiv">
        <p>{props.props.about || "About me...."}</p>
      </div>
    </div>
    <div className="row">
      <h3>My Projects</h3>
      <div className="col-sm-12 myProjects profileAboutDiv">
          {props.props.projects.length >= 1 ? props.props.projects.map((project, i) => <p key={i}>{project}</p>  
          ) : <p>My Projects...</p>}
      </div>
    </div>
    <div className="row">
    <h3>Joined Projects</h3>
      <div className="col-sm-12 myJoined profileAboutDiv">
        {props.props.joined.length >= 1 ? props.props.joined.map((join,i) => <p key={i}>{join}</p>  
        ) : <p>Joined Projects...</p>}
      </div>
    </div>
   
  </div>)
}

export default MyInfo
