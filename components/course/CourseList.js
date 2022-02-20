import CourseCard from "./CourseCard";

function CourseList() {
  return (
    <div className="bg-white w-full">
      {Array(5)
        .fill()
        .map((_) => (
          <CourseCard />
        ))}
    </div>
  );
}

export default CourseList;
