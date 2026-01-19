import dummyBugs from "../data/dummyBugs"
import BugItem from "./BugItem"

function BugList() {
  return (
    <section>
      <h2>에러 목록</h2>
      {dummyBugs.map(bug => (
        <BugItem key={bug.id} bug={bug} />
      ))}
    </section>
  )
}

export default BugList

