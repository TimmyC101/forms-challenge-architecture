import React from 'react';

function FormComponent(props) {
    return(
        <main>
            <div className="description">
                <p>As the user enters data into the inputs fields, the app uses event handling and data binding to continually update the state with the input value.</p>
                <p>On submittal, the input values are retrieved from the state properties and displayed in a window alert. </p>
            </div>
            <form onSubmit={props.submitForm}>
                <span style={{display: 'block', marginLeft: 5, marginBottom: 10}}>Please input your travel information:</span>
                <input 
                    type="text"
                    name="firstName"
                    placeholder="First Name" 
                    value={props.data.firstName}
                    onChange={props.handleClick}
                /><br/>

                <input 
                    type="text"
                    name="lastName"
                    placeholder="Last Name" 
                    value={props.data.lastName}
                    onChange={props.handleClick}
                /><br/>

                <input 
                    type="number"
                    name="age"
                    placeholder="Age" 
                    value={props.data.age}
                    onChange={props.handleClick}
                /><br/>

                <div className="txt">Gender:</div>
                <label>
                    <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={props.data.gender === "male"}
                    onChange={props.handleClick}
                    />Male
                </label>

                <label>
                    <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={props.data.gender === "female"}
                    onChange={props.handleClick}
                    />Female
                </label><br/>

                <label><div className="txt">Destination:</div>
                    <select
                    name="location"
                    value={props.data.location}
                    onChange={props.handleClick}
                    >
                    <option value="">Select a Destination</option>
                    <option value="Cancun">Cancun</option>
                    <option value="Cozumel">Cozumel</option>
                    <option value="Roatan">Roatan</option>
                    <option value="Belize City">Belize City</option>
                    </select><br/>
                </label>

                <div className="txt">Dietary Restrictions:</div>
                <label>Vegetarian
                    <input  
                    type="checkbox"
                    name="isVegan"
                    checked={props.data.isVegan}
                    onChange={props.handleClick}
                    />
                </label>

                <label>Kosher
                    <input  
                    type="checkbox"
                    name="isKosher"
                    checked={props.data.isKosher}
                    onChange={props.handleClick}
                    />
                </label>

                <label>Lactose Free
                    <input  
                    type="checkbox"
                    name="isLactoseFree"
                    checked={props.data.isLactoseFree}
                    onChange={props.handleClick}
                    />
                </label>

                <button>Submit</button>
            </form>
        </main>
    )
}

export default FormComponent;