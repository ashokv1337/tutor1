import Categories from "../components/categories/Categories";
import CourseCard from "../components/Courses/CoursesCard";
import FeaturedCourses from "../components/courses/FeaturedCourses";
import HoverPopup from "../components/courses/HoverPopup";
// import TeachingSteps from "../components/courses/InstructorSteps";
import {BecomeInstructor, TeachingSteps} from "../components/courses/InstructorSteps";
import InstructorSteps from "../components/courses/InstructorSteps";
import { Welcome } from "../welcome/welcome";
// import instructorImage from "../assets/png/instructor.png";
import InstructorCard from "../components/courses/InstructorCard";

export function meta() {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  // return <HoverPopup {...courseData} />;
  const handleStartTeaching = () => {
    alert("Start Teaching clicked!");
  };

  return (
    <>
    <div className="container my-5">
      <div className="row">
        {/* Become Instructor */}
        <div className="col-lg-6 mb-4">
          <BecomeInstructor
            title="Become an instructor"
            description="Instructors from around the world teach millions of students on Udemy. We provide the tools and skills to teach what you love."
            buttonText="Start Teaching"
            onClick={() => alert("Start Teaching clicked!")}
          />
        </div>
        {/* Teaching Steps */}
        <div className="col-lg-6 mb-4">
          <TeachingSteps
            title="Your teaching & earning steps"
            steps={steps}
          />
        </div>
      </div>
    </div>
    <div className="container my-5 d-flex justify-content-center">
      <InstructorCard
        // image={instructorImage}
        name="Devon Lane"
        title="Senior Developer"
        rating="4.6"
        students="854"
      />
    </div>
    </>
  );

}


const courseData = {
  category: "DEVELOPMENTS",
  title: "2021 Complete Python Bootcamp From Zero to Hero in Python",
  instructorName: "Kevin Gilbert",
  price: 14.0,
  oldPrice: 26.0,
  discount: 56,
  rating: 5.0,
  students: "265.7K",
  level: "Beginner",
  duration: "6 hours",
  learnings: [
    "Learn to use Python professionally, learning both Python 2 and Python 3!",
    "Create games with Python, like Tic Tac Toe and Blackjack!",
    "Create projects with Python to build real-world skills.",
  ],
};

const steps = [
  {
    text: "Apply to become instructor",
    backgroundColor: "#E8ECFF",
    textColor: "#5A67D8",
  },
  {
    text: "Build & edit your profile",
    backgroundColor: "#FFE8E8",
    textColor: "#E53E3E",
  },
  {
    text: "Create your new course",
    backgroundColor: "#FFEFE8",
    textColor: "#DD6B20",
  },
  {
    text: "Start teaching & earning",
    backgroundColor: "#E8FCE8",
    textColor: "#38A169",
  },
];
