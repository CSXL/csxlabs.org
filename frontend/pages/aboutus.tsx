import '../styles/globals.css'
import Link from 'next/link'
import Head from 'next/Head' 
import Image from 'next/image'
import '../Images/csxlang.jpeg'

function Aboutus() {
  return (
  <div id='maindiv'>
 
  <ul>
  <li>
    <Link href='/'>
  <a>Index page</a>
  </Link>
  </li>
 <li>
   <Link href='index'>
 <a >Home page</a>
   </Link>

  </li>
    <li id='right_li'>
      
      </li>
    
  <li id='right_li'>
   <b> <i>CSX LABS</i></b>
    </li>
  </ul>


  <h3 id='maininfo' >
    Computer Science Exploration Laboratories is a code marketing buissness.We aim to provide the mostl useful <br></br> script to our customers and meet their expectation.To meet the expectations of our <br></br>customers we do it with help of our two Institutions(Research and Development).
  </h3>
  <h3 id='history'>
  The company CSX Laboratories was founded in California high school in year 2021  while Adam Blumenfeld and<br></br> Srinidhi Murthy were having a conversation related to coding.<br></br>We both shared the same vision and goal in life and have interest in hardware and software.<br></br>Our career’s were based on code and wanted to help the technology industry.<br></br>We would share ideas about our innovative projects and facts about this industry.

    </h3>
<ul >
<li >

  <h1 id='left'>Development Institution</h1><br></br>
  The development institution is one division of CSX Labs.We specialize in the development of customizable and advanced source code.We aim to make every product unique and make them have something great to offer.What makes this sector of the company different is the quality of our products,uniqueness and delivery.We plan to deliver our products via GitHub or through our website itself.The Development Institution aims to be affordable and not be overpriced.

</li> 
<li >
    <h1 id='right'>Research Institution</h1>
    <br></br>
    The research Institution is the other sector of the company that aims to build advanced standard products for customers.We aim to build products in the unsaturated<br></br> fields of the computer science market.We want every field in this industry to offer something unique<br></br> and new in the same time.<br></br>Our products can be used by customers for education purposes,products for start ups etc. 

  </li>
</ul>

</div>



  )
}

export default Aboutus
