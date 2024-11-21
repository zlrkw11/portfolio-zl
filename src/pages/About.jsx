import MusicPlayer from "../components/MusicPlayer";
import Sona from "../assets/icons/sona.png";
import Spotify from "../assets/icons/spotify.png";
const Pfp = ({ fileId }) => {
  const imageUrl = `https://drive.google.com/thumbnail?id=${fileId}&sz=w100`;
  return <img src={imageUrl} alt="profile pic" />;
};
function About() {
  return (
    <div className="min-w-screen min-h-[120dvh] justify-center overflow-hidden bg-dark-0 flex flex-col">
      <div className=" flex-col flex gap-8 m-8 h-8 w-auto items-center justify-center">
        <div>
          <div className="text-white text-5xl font-bold mr-auto mb-4 title">
            About
          </div>
          <div className="text-white text-xl min-w-[300px] md:min-w-[800px] lg:max-w-[1000px] border-b-2 py-2">
            <Pfp fileId="12x_wVXjJ03ZPrE9QUfeawGDJgynIG2HO" />
            <div className="flex flex-col gap-4">
              <div className="border-b-2 py-2">
                <h1 className="text-2xl">name:</h1>
                <h2>Ray Zhao</h2>
              </div>
              <div className="border-b-2 py-2">
                <h1 className="text-2xl">birth date:</h1>
                <h2>2004/04/06</h2>
              </div>
              <div className="border-b-2 py-2">
                <h1 className="text-2xl">hobbies: </h1>
                <h2 className="">
                  sleeping, gaming
                  <span className="line-through inline-block">
                    (league of legends)
                  </span>
                  , listening to music
                </h2>
              </div>
              <div>
                <h1 className="text-2xl">links: </h1>
                <div className="flex gap-4">
                  <a href="https://www.op.gg/summoners/oce/zlrkw11-kaede">
                    <img className="w-16" src={Sona} />{" "}
                    <p className="text-blue-600 hover:text-white font-bold w-4">
                      OPGG
                    </p>
                  </a>
                  <a href="https://open.spotify.com/user/in6odick8eugkoe0bjwsywg5s?si=ab89f37c7abb47f9">
                    <img className="w-16" src={Spotify} />{" "}
                    <p className="text-black hover:text-white font-bold w-4">
                      spotify
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-white">
          <p className="mb-2">A song to share:</p>
          <MusicPlayer />
        </div>
      </div>
    </div>
  );
}
export default About;
