import Sona from "../assets/icons/sona.png";
import Spotify from "../assets/icons/spotify.png";
const Pfp = ({ fileId }) => {
  const imageUrl = `https://drive.google.com/thumbnail?id=${fileId}&sz=w100`;
  return <img src={imageUrl} alt="profile pic" />;
};
function About() {
  return (
    <div className="min-w-screen min-h-[120dvh] justify-center overflow-hidden bg-dark-0 flex flex-col">
      <div className="flex-col flex gap-8 m-8 h-8 w-auto items-center justify-center">
        <div>
          <div className="text-gray-100 text-5xl font-bold mr-auto mb-4 title">
            About
          </div>
          <div className="text-gray-400 text-xl min-w-[300px] md:min-w-[800px] lg:max-w-[1000px] py-2">
            <Pfp fileId="12x_wVXjJ03ZPrE9QUfeawGDJgynIG2HO" />
            <div className="flex flex-col gap-8 mt-4">
              <div className="border-b border-b-gray-400 italic">
                <h1 className="text-gray-200">name:</h1>
                <h2 className="text-gray-300">Ray Zhao</h2>
              </div>
              <div className="border-b border-b-gray-400 italic">
                <h1 className="text-gray-200 ">birth date:</h1>
                <h2 className="text-gray-300">2004 April 6</h2>
              </div>
              <div className="border-b border-b-gray-400 italic">
                <h1 className="text-gray-200 ">hobbies: </h1>
                <h2 className="text-gray-300">
                  sleeping, gaming, listening to music
                </h2>
              </div>
              <div>
                <h1 className="text text-gray-200 italic">links: </h1>
                <div className="flex gap-4 p-2 border-b border-b-gray-400 italic">
                  <a href="https://www.op.gg/summoners/oce/zlrkw11-kaede">
                    <img className="w-8" src={Sona} />{" "}
                  </a>
                  <a href="https://open.spotify.com/user/in6odick8eugkoe0bjwsywg5s?si=ab89f37c7abb47f9">
                    <img className="w-8" src={Spotify} />{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="text-white">
          <p className="mb-2">A song to share:</p>
          <MusicPlayer />
        </div> */}
      </div>
    </div>
  );
}
export default About;
