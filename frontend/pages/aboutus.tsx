import Link from 'next/link'

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
       Computer Science Exploration Laboratories is an open-research laboratory.We aim to explore and create new fields and introduce people to these market of the technology industry. <br/> CSX labs also has a goal to advance humanity by providing the various features that can be offered by these unsaturated markets. <br />To meet the expectations of our customers we do it with help of our two Sectors(Research and Solutions).

  </h3>
  <h3 id='history'>
  The company CSX Laboratories was founded in California high school in year 2021  while Adam Blumenfeld and<br /> Srinidhi Murthy were having a conversation related to coding.<br />We both shared the same vision and goal in life and have interest in hardware and software.<br />Our career’s were based on code and wanted to help the technology industry.<br />We would share ideas about our innovative projects and facts about this industry.

    </h3>
<ul >
<li >

  <h1 id='left'>Solutions Services</h1><br />
  The solutions service is one division of CSX Labs.We specialize in the development of customizable and advanced source code.We aim to make every product unique and<br /> make them have something great to offer.What makes this sector of the company different is the quality<br /> of our products,uniqueness and<br /> delivery.We plan to deliver our products via GitHub or through our website itself.

</li> 
<li >
    <h1 id='right'>Research Services</h1>
    <br />
    The Research service is the other sector of the company that aims to build advanced standard products for customers.We aim to build products in the unsaturated<br /> fields of the computer science market.We want every field in this industry to offer something unique<br /> and new in the same time.<br />Our products can be used by customers for education purposes,products for start ups etc. 

  </li>
</ul>

</div>



  )
}

export default Aboutus
