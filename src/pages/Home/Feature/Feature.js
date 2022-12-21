import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
const features = [
  {
    id: 1,
    name: "Travel NEW ZEALAND",
    description:
      "New Zealand. The land of Middle Earth, Great Walks, kiwis, backpackers, adventure sports, delicious wine, and pristine remote landscapes. It’s also a land that sucks all your money from your wallet like a giant vacuum. I first visited New Zealand over a decade ago.The country was so much more expensive than I thought it would be.Back then, I was a cheap(er) backpacker and focused on saving as much money as I could.I cooked most of my meals, hitchhiked, skipped all the costly adventure sports, and drank a diet of cheap boxed wine and happy hour beer.",
    img: "https://images.pexels.com/photos/5291518/pexels-photo-5291518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    name: "Travel Thailand",
    description:
      "Traveling around Thailand can cost as little or as much as you want it to. This is a country that covers all budgets, where you can stay in 250 THB dorm rooms or 30,000 THB luxury resort suites. Dig into street food for pennies or dine on gourmet dinners for hundreds. Relax on free beaches and visit inexpensive attractions or take expensive tours where your every need is catered to. Thailand was where I first decided to quit my job and travel the world. I lived there for two years. I ran tours there. I feel at home there.It’s not just a country that I love, however. Thailand remains popular some fifty years after the first hippies arrived on the “banana pancake trail” for a simple reason: it’s awesome.",
    img: "https://images.pexels.com/photos/3768647/pexels-photo-3768647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    name: "Travel Uganda",
    description:
      "Today’s guest post is from Alicia Erickson. She’s a travel writer who splits her time primarily between East and Southern Africa, India, and Seattle. She’s writing about how to save money in Uganda, a country I have longed to visit but still haven’t gotten around to doing. Alicia shares her tips and tricks to save on your next visit!",
    img: "https://images.pexels.com/photos/775204/pexels-photo-775204.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 4,
    name: "Travel Egypt",
    description:
      "One of the countries high up on my “must visit” list is Egypt. As a lover of history, I long to release my inner archaeologist and explore the many ruins of the country. While it might be a long time before I get there, my friend Jeremy Scott Foster from TravelFreak has visited a couple of times. In this guest post, he’ll give you his best tips for saving money on your next visit to Egypt!",
    img: "https://images.pexels.com/photos/4110472/pexels-photo-4110472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

export default function Feature() {
  return (
    <div className="bg-white">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Travel smarter, cheaper, longer
          </h2>
          <p className="mt-4 text-gray-500">
            Where do you want to go? You are not alone. Since I started this
            website in 2022, I’ve helped tens of millions of people answer those
            questions and travel more for less with time-tested and proven tips
            and advice.
          </p>
          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.id} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          {features.map((feature) => (
            <PhotoProvider>
              <PhotoView src={feature.img}>
                <img
                  key={feature.name}
                  src={feature.img}
                  alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                  className="rounded-lg bg-gray-100"
                />
              </PhotoView>
            </PhotoProvider>
          ))}
        </div>
      </div>
    </div>
  );
}
