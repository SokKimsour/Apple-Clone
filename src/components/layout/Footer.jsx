export default function Footer() {
  return (
    <footer>
      <div className="w-full h-auto py-[40px]">
        <div className="w-[980px] h-auto mx-auto text-gray-400  border-gray-400 border-b-[1px]">
        <p className="text-justify pb-[10px]">
          1. Trade‑in values will vary based on the condition, year, and
          configuration of your eligible trade‑in device. Not all devices are
          eligible for credit. You must be at least the age of majority to be
          eligible to trade in for credit or for an Apple Gift Card. Trade‑in
          value may be applied toward qualifying new device purchase, or added
          to an Apple Gift Card. Actual value awarded is based on receipt of a
          qualifying device matching the description provided when estimate was
          made. Sales tax may be assessed on full value of a new device
          purchase. In‑store trade‑in requires presentation of a valid photo ID
          (local law may require saving this information). Offer may not be
          available in all stores and may vary between in‑store and online
          trade‑in. Some stores may have additional requirements. Apple or its
          trade‑in partners reserve the right to refuse, cancel, or limit
          quantity of any trade‑in transaction for any reason. More details are
          available from Apple’s trade-in partner for trade‑in and recycling of
          eligible devices. Restrictions and limitations may apply.
        </p>
        <p className="text-justify pb-[10px] text-gray-500"> 
            Beware of gift card scams. Do not share your code.
        </p>
        <p className="text-justify pb-[10px]"> 
            Valid only for U.S. transactions in Apple properties. For assistance, visit support.apple.com/giftcard or call 800-275-2273. Not redeemable at Apple resellers or for cash, and no resale, refunds, or exchanges, except as required by law. Apple is not responsible for unauthorized use. Terms apply; see apple.com/us/go/legal/gc. Issued by Apple Value Services, LLC (AVS). © 2025 Apple Inc. All rights reserved.
        </p>
        <p className="text-justify pb-[10px]"> 
            To access and use all Apple Card features and products available only to Apple Card users, you must add Apple Card to Wallet on an iPhone or iPad that supports and has the latest version of iOS or iPadOS. Apple Card is subject to credit approval, available only for qualifying applicants in the United States, and issued by Goldman Sachs Bank USA, Salt Lake City Branch. </p>
        <p className="text-justify pb-[10px]"> 
            Apple Payments Services LLC, a subsidiary of Apple Inc., is a service provider of Goldman Sachs Bank USA for Apple Card and Savings accounts. Neither Apple Inc. nor Apple Payments Services LLC is a bank.
        </p>
        <p className="text-justify pb-[10px]"> 
            If you reside in the U.S. territories, please call Goldman Sachs at 877-255-5923 with questions about Apple Card.
        </p>
        <p className="text-justify pb-[10px]"> 
           Learn more about how Apple Card applications are evaluated at support.apple.com/kb/HT209218.
        </p>
        <p className="text-justify pb-[10px]"> 
         A subscription is required for Apple Arcade, Apple Fitness+, Apple Music, and Apple TV.
        </p>
        <p className="text-justify pb-[10px]"> 
         Features are subject to change. Some features, applications, and services may not be available in all regions or all languages.
        </p>
        </div>
        <div className="w-[980px] mx-auto pt-[10px] px-6 grid grid-cols-5 gap-10">
            {/* Column 1 */}
        <div className="pt-[10px]">
          <h4 className="font-semibold text-gray-900 mb-3">Shop and Learn</h4>
          <ul className="space-y-2 text-gray-400">
            <li>Store</li>
            <li>Mac</li>
            <li>iPad</li>
            <li>iPhone</li>
            <li>Watch</li>
            <li>Vision</li>
            <li>AirPods</li>
            <li>TV & Home</li>
            <li>AirTag</li>
            <li>Accessories</li>
            <li>Gift Cards</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="font-semibold text-gray-600 mb-3">Apple Wallet</h4>
          <ul className="space-y-2 text-gray-400">
            <li>Wallet</li>
            <li>Apple Card</li>
            <li>Apple Pay</li>
            <li>Apple Cash</li>
          </ul>

          <h4 className="font-semibold text-gray-600 mt-6 mb-3">Account</h4>
          <ul className="space-y-2 text-gray-400">
            <li>Manage Your Apple Account</li>
            <li>Apple Store Account</li>
            <li>iCloud.com</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="font-semibold text-gray-600 mb-3">Entertainment</h4>
          <ul className="space-y-2 text-gray-400">
            <li>Apple One</li>
            <li>Apple TV+</li>
            <li>Apple Music</li>
            <li>Apple Arcade</li>
            <li>Apple Fitness+</li>
            <li>Apple News+</li>
            <li>Apple Podcasts</li>
            <li>Apple Books</li>
            <li>App Store</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h4 className="font-semibold text-gray-600 mb-3">Apple Store</h4>
          <ul className="space-y-2 text-gray-400">
            <li>Find a Store</li>
            <li>Genius Bar</li>
            <li>Today at Apple</li>
            <li>Group Reservations</li>
            <li>Apple Camp</li>
            <li>Apple Store App</li>
            <li>Certified Refurbished</li>
            <li>Apple Trade In</li>
            <li>Financing</li>
            <li>Carrier Deals at Apple</li>
            <li>Order Status</li>
            <li>Shopping Help</li>
          </ul>
        </div>

        {/* Column 5 */}
        <div>
          <h4 className="font-semibold text-gray-600 mb-3">For Business</h4>
          <ul className="space-y-2 text-gray-400">
            <li>Apple and Business</li>
            <li>Shop for Business</li>
          </ul>

          <h4 className="font-semibold text-gray-600 mt-6 mb-3">For Education</h4>
          <ul className="space-y-2 text-gray-400">
            <li>Apple and Education</li>
            <li>Shop for K-12</li>
            <li>Shop for College</li>
          </ul>

          <h4 className="font-semibold text-gray-600 mt-6 mb-3">For Healthcare</h4>
          <ul className="space-y-2 text-gray-400">
            <li>Apple and Healthcare</li>
          </ul>

          <h4 className="font-semibold text-gray-600 mt-6 mb-3">For Government</h4>
          <ul className="space-y-2 text-gray-400">
            <li>Apple and Government</li>
            <li>Shop for Veterans and Military</li>
            <li>Shop for State and Local Employees</li>
            <li>Shop for Federal Employees</li>
          </ul>
        </div>

        </div>
        <div className="w-[980px] h-auto mx-auto text-gray-400 py-[10px]  border-gray-400 border-b-[1px]">
            <p className="text-justify">More ways to shop: Find an Apple Store or other retailer near you. Or call 1-800-MY-APPLE (1-800-692-7753).</p>
        </div>
        <div className="w-[980px] h-auto mx-auto text-gray-400 py-[10px]  ">
            <p className="text-justify">Copyright © 2025 Apple Inc. All rights reserved.Privacy Policy Terms of Use Sales and Refunds Legal Site Map</p>
        </div>
      </div>
    </footer>
  );
}
