import { useNavigate } from "react-router-dom";
import img from "../../assets/images/bank.jpg";
const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container:full px-5">
        <div className="grid grid-cols-2 items-center mt-10">
          <div className="columns-1 text-left pe-5">
            <h1 className="text-8xl text-white font-bold">
              Take Control of{" "}
              <span className="text-8xl mx-4 font-bold text-blue-700">
                Your Finance
              </span>
            </h1>
            <p className="text-xl font-semibold mt-6">
              Secure, Reliable, and Convenient Banking at Your Fingertips
            </p>
            <h1 className="text-left mt-5 text-2xl font-semibold text-blue-700">
              Why Choose Us?
            </h1>
            <p className="font-medium text-left my-5">
              We provide seamless banking solutions to help you manage your
              finances effortlessly. Whether you're saving for the future,
              making daily transactions, or seeking financial guidance, we are
              here to empower you.
            </p>
            <ul className="text-left">
              <li>
                {/* ✅{" "} */}
                <span className="font-bold text-blue-700">
                  Safe & Secure Transactions{" "}
                </span>{" "}
                – Advanced security measures to protect your money.{" "}
              </li>
              <li>
                {/* ✅{" "} */}
                <span className="font-bold text-blue-700">
                  24/7 Banking Access{" "}
                </span>{" "}
                – Manage your finances anytime, anywhere.
              </li>
              <li>
                {/* ✅{" "} */}
                <span className="font-bold text-blue-700">
                  Fast & Easy Loans{" "}
                </span>{" "}
                – Quick approvals with flexible repayment options.
              </li>
              <li>
                {/* ✅{" "} */}
                <span className="font-bold text-blue-700">
                  Personalized Banking Solutions{" "}
                </span>{" "}
                – Tailored financial services to meet your needs.
              </li>
            </ul>
          </div>
          <div className="columns-1">
            <img
              src={img}
              alt="bank"
              className="rounded-lg"
              width="80%"
              height="70%"
            />
          </div>
        </div>
      </div>
      <footer className="px-5">
        <h1 className="my-4 text-3xl text-left font-bold text-white border-t-[1px] border-spacing-10">
          Our Services
        </h1>
        <div className="grid grid-cols-4 gap-4 my-5 font-semibold">
          <div className="text-left">
            <h1 className="text-lg text-blue-700 font-semibold">
              {/* 🌐 */}
              Digital Banking
            </h1>
            <p>Internet & Mobile Banking</p>
            <p> Instant Fund Transfers</p>
            <p>Bill Payments & Recharges</p>
          </div>

          <div className="text-left">
            <h1 className="text-lg text-blue-700 font-semibold">
              {/* 🌐 */}
              Accounts & Deposits
            </h1>
            <p>Savings & Current Accounts</p>
            <p> Fixed & Recurring Deposits</p>
            <p>High-Interest Rates on Deposits</p>
          </div>
          <div className="text-left">
            <h1 className="text-lg text-blue-700 font-semibold">
              {/* 🌐 */}
              Loans & Credit{" "}
            </h1>
            <p>Home & Personal Loans</p>
            <p> Business & Education Loans</p>
            <p>Credit Cards with Exclusive Benefits</p>
          </div>

          <div className="text-left">
            <h1 className="text-lg text-blue-700 font-semibold">
              {/* 🌐 */}
              Security & Support
            </h1>
            <p>Fraud Protection & Alerts</p>
            <p> 24/7 Customer Assistance</p>
            <p>Multi-layered Authentication</p>
          </div>
        </div>
        <h2 className="mt-10 font-medium ">Get Started Today!</h2>
        <p className="font-medium">
          Open an account in minutes and experience hassle-free banking with us.
        </p>
        <p className="cursor-pointer">
          {" "}
          <span onClick={() => navigate("/register")}>Register Now</span> |{" "}
          <span onClick={() => navigate("/login")}>Login</span> |{" "}
          <span onClick={() => navigate("/contact")}>Contact Us</span>{" "}
        </p>
      </footer>
    </>
  );
};
export default Home;
