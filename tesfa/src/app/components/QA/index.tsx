export default function TestingQA() {
  return (
    <div id="testing-qa-assurance" className="mt-10 flex flex-col items-center  justify-center py-10">

      <h1 className="text-3xl md:text-6xl font-bold text-center mb-10 text-[#003D3B]">
        Testing & <span className="text-[#C59D2C]">Quality Assurance</span>
      </h1>
      <div className="lg:px-40 text-xl">
      <p >
        For backend testing, the approach covers several key areas. Model tests are written to verify all aspects of model logic, including creation, default values, string representations, field validation, and enforcement of unique constraints. API endpoint tests are implemented to ensure that all core endpoints correctly handle CRUD operations, returning appropriate responses for each operation. For business logic, any custom behaviors in models or endpoints, such as cascading deletes or logic tied to user roles, are specifically tested to make sure these work as intended. To maintain database integrity, TransactionTestCase is relied on for scenarios involving unique constraints and foreign keys, which helps to catch and handle database-level errors effectively. For test data, test records are always created using the ORM within setUp methods or directly inside the tests, and production data is never used. The goal is to achieve at least 85 percent test coverage on the backend, with particular focus on the most important models and endpoints.
      </p>
<br></br>
      <p>
        For frontend testing, the approach ensures that each page and component is verified to render correctly with all required elements. Components are tested with various props, mocked hooks, and different data states, including loading, error, populated, and empty scenarios, to confirm that behavior is consistent in all cases. User interactions such as typing, clicking buttons, toggling password visibility, and submitting forms are simulated to check that the user interface updates as expected and that any necessary API calls are triggered. To keep tests fast and reliable, all API utilities, hooks, and Next.js navigation are mocked, allowing for isolation of component logic. It is also checked that invalid input is properly caught and that user interface error states are displayed when appropriate, ensuring that error responses from APIs result in the correct messages being shown. For role-based flows, it is confirmed that users with different roles, such as admin or organization user, see the correct dashboard or are redirected as expected.
      </p>
      <br></br>
      </div>
      <div className="bg-[#00353D] mt-10 ">

        <div className=" grid grid-cols-1 md:grid-cols-3 w-full  lg:px-50 lg:py-15">

          <div className="bg-[#00353D] md:mb-45 text-white   p-15 px-7  border-t-2 border-l-2 border-r-2 border-dashed border-[#C59D2C] py-10">
            <h2 className="text-xl font-semibold md:text-4xl mb-5">Frontend (Jest)</h2>
            <p className="text-sm md:text-xl leading-relaxed">
              Unit tests for React dashboard components and UI snapshot tests
              for core views.
            </p>
          </div>

          <div className="bg-[#00353D] text-white md:mt-45  px-7 p-12 border-b-2 border-l-2 border-r-2 border-dashed border-[#C59D2C] py-10">
            <h2 className="text-xl font-semibold md:text-4xl mb-5">Backend (Pytest)</h2>
            <p className="text-sm md:text-xl leading-relaxed">
              API endpoint and response validation, Database migration and schema
              integrity tests, Agentic AI workflow and prediction tests.
            </p>
          </div>

          <div className="bg-[#00353D] md:mb-45 text-white  px-7  border-t-2 border-l-2 border-r-2 border-dashed border-[#C59D2C] py-10">
            <h2 className="text-xl md:text-4xl font-semibold mb-5">Automation</h2>
            <p className="text-sm md:text-xl leading-relaxed">
              Continuous Integration (CI) pipeline runs Jest and Pytest on each
              commit and Automated accessibility audit is triggered before
              production deployments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}