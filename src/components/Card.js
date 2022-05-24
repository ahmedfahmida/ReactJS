//const titleTinder = "looking for parter";
//const desTinder="The original prototype for Tinder, called 'MatchBox', was built during a hackathon in February 2012 by Sean Rad and engineer Joe Munoz. The hackathon was hosted by Hatch Labs, a NY-based startup incubator with a West Hollywood outpost. Realizing the name MatchBox was too similar to Match.com, Rad, his co-founders, and early employees renamed the company to Tinder. The company's flame-themed logo remained consistent throughout the rebranding.. This is a partner finding app. If you are single, looking for partner, this is right place for you.";
const date= new Date();
const dateNew= date.getDate();
const monthNew= date.getMonth();
const yearNew= date.getFullYear();

function Card(props)
{
    const{titleTinder,descNo}=props;
    return <div className='card'>
            <h2 className='cardtitle'>{titleTinder}</h2>
            <p className='carddes'>{descNo}</p>
            <p className='footer'>{dateNew + "/" + monthNew + "/" + yearNew}</p>
            </div>
}
export default Card;