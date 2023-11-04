export const EmployeesTable = () => {
  return (
    <div>
      <div>
        <div>{/* implement Department dropdown here */}</div>
      </div>
      <div className="table_container">
        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Department</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody className="tbody">{/* populate all rows here */}</tbody>
        </table>
      </div>
      {/* import Pagination component here */}
    </div>
  );
};
