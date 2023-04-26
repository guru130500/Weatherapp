import React from 'react'

const Html=()=>{
    return(
        <div>
           <header>
           <h1><a href='#h1'>Home</a>

           <a href='#h2'>Gallery</a>

           <a href='#h3'>Information</a>
           
           <a href='#h4'>ABout</a>

           </h1>

           </header>
           <center><h1 id='h1'><u>Home</u></h1></center>
           <br></br>
           <img src='https://cdn.pixabay.com/photo/2016/11/14/04/45/elephant-1822636__340.jpg'  height={'600px'} width={'100%'} alt={'Animal'}></img>
           <p>Animals are multicellular, eukaryotic organisms in the biological kingdom Animalia. With few exceptions, animals consume organic material, breathe oxygen, are able to move, can reproduce sexually, and grow from a hollow sphere of cells, the blastula, during embryonic development. Over 1.5 million living animal species have been described—of which around 1 million are insects—but it has been estimated there are over 7 million animal species in total. Animals range in length from 8.5 micrometres (0.00033 in) to 33.6 metres (110 ft). They have complex interactions with each other and their environments, forming intricate food webs. The scientific study of animals is known as zoology.

Most living animal species are in Bilateria, a clade whose members have a bilaterally symmetric body plan. The Bilateria include the protostomes, containing animals such as nematodes, arthropods, flatworms, annelids and molluscs, and the deuterostomes, containing the echinoderms and the chordates, the latter including the vertebrates. Life forms interpreted as early animals were present in the Ediacaran biota of the late Precambrian. Many modern animal phyla became clearly established in the fossil record as marine species during the Ca</p>
            
           <br></br>
           <center><h1 id='h2'><u>Gallery</u></h1></center>
           <nav>
           
            <img src='https://cdn.pixabay.com/photo/2012/06/19/10/32/owl-50267__340.jpg' height={'500px'} width={'500px'} alt="img2" ></img>
            
            <img src='https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492__340.jpg' height={'500px'} width='500px' alt='img3'></img>
            <img src='https://cdn.pixabay.com/photo/2012/03/01/00/55/flowers-19830__340.jpg' height={'500px'} width={'500px'} alt={'img1'}></img>
           </nav>
           <br></br>
           <center><h1 id='h3'><u>Information</u></h1></center>
           <br></br>
           <center><img src='https://friendsofsfacc.org/wp-content/uploads/2021/06/BabyBIrdMontage-720x405-1.jpg' height={'500px'} width={'500px'} alt='img4'></img></center>
           <p>Coyotes are very visible and active during the last part of Summer and the start of Fall – known in the wildlife world as dispersal season. Pups born earlier in the Spring are venturing out and about, and adults are on the move now that the pups can be on their own. SFACC receives more sightings reports during dispersal season than during most other months. These sightings reports are reviewed by the City’s Wildlife Working Group which is made up of staff from SFACC, SF Recreation & Parks, and the Presidio Trust.  

Coyote pups that end up in unfamiliar areas and get themselves in a pickle are often helped out of their predicaments by our team of Animal Control Officers. A recent rescue helped out both a coyote AND a homeowner who didn’t really want a coyote tenant. The pup got himself stuck in a backyard and was too frightened to move. The homeowner called in SFACC. Animal Control Officers rescued the pup and sent him on his way in a more appropriate area. 

Along with the increase in coyote activity and sightings comes the potential for more conflict. SFACC strongly advises residents to keep cats indoors at all times. Dog should always be on leash, and guardians should remain vigilant when outside. Small dog guardians should be prepared to pick up their dog and slowly walk away if they see a coyote. </p>
     <br></br>
       <center><h1 id='h4'><u>About</u></h1></center>
       <center>
        <table cellSpacing={'40px'}>
            <tr>
                <th>Social</th>
                <th>About us</th>
                <th>Contact us</th>
            </tr>
            <tr>
                <td>Facebook</td>
                <td>Facebook</td>
                <td>Facebook</td>
               
            </tr>
            <tr>
                <td>Instagram</td>
                <td>Website</td>
                <td>Email us</td>
                
            </tr>
            <tr>
                <td>Whatsapp</td>
                <td>App</td>
                <td>Call us</td>
                
            </tr>
        </table>
       
       </center>
        </div>
    )
}
export default Html