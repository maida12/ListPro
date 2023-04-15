import React, { useState } from 'react';


function MyForm() {
  // Declare state variables to hold form data
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [gender, setGender] = useState('');

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}\nGender: ${gender}`);
  };

  return (
    <div className='main'>
      
<head>
    <title>Homepage design</title>
</head>

<body>
    <div class="banner-area">
    <header>
           <div class="menu">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Serrvices</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>

        </header>
        <div class="banner-text">
            <h1>HomePage Design</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic autem harum eaque aut deserunt pariatur eum
                ea, sequi minus nam veniam atque et quisquam molestiae aperiam! Iusto, ipsum.</p>
            <a href="#">Read More</a>
            <a href="#">Watch More</a>
        </div>


    </div>
</body>


    </div>
  );
}

export default MyForm;
