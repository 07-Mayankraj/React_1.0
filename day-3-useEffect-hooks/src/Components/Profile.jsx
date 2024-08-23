function Profile(props){

    const {name , image , skills , handleClick} = props
    console.log(name, image, skills, handleClick);
    return <>
      <img
        src={image}
        alt = {name}
        width="200px"
       />
       <h6>{name}</h6>
       <p > skills : {skills.join(' ')}</p>
    </>
  }


  export default Profile