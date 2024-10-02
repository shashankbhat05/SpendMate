import { Form } from "react-router-dom"

// library
import { UserPlusIcon } from "@heroicons/react/24/solid";

// assets
import image from "../assets/image.jpg"

const Intro = () => {
  return (
    <div className="intro">
      <div>
        <h1>
          Stay Ahead With <span className="accent">Your Finances</span>
        </h1>
        <p>
      Unlock financial freedom with smart budgeting. Begin your journey today.
        </p>
        <Form method="post">
          <input
            type="text"
            name="userName"
            required
            placeholder="What is your name?" aria-label="Your Name" autoComplete="given-name"
          />
          <input type="hidden" name="_action" value="newUser" />
          <button type="submit" className="btn btn--dark">
            <span>Create Account</span>
            <UserPlusIcon width={20} />
          </button>
        </Form>
      </div>
      <img src={image} alt="Person with money" width={600} />
    </div>
  )
}
export default Intro