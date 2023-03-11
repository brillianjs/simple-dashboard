import React, { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { Input, Button } from "@chakra-ui/react";
import { supabase } from "../utils/api";

function Staff() {
  const [staff, setstaff] = useState([]);
  async function getStaff() {
    let { data: staff, error } = await supabase.from("staff").select("*");
    setstaff(staff);
  }

  useEffect(() => {
    getStaff();
  }, []);

  staff.map((e) => {
    console.log(e.name);
  });

  console.log(staff);
  return (
    <>
      <div className="w-full p-10 bg-white rounded-lg">
        <div className="w-full flex justify-between">
          <h1 className="text-3xl font-bold text-teal-700 my-2">Staff</h1>
          <Button color={"teal"}>Add Staff</Button>
        </div>

        <div className="w-full border border-b-0 border-gray-300"></div>
        <div className="py-10">
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>No</Th>
                  <Th>Staff Name</Th>
                  <Th>Address</Th>
                  <Th>Phone</Th>
                </Tr>
              </Thead>
              <Tbody>
                {staff ? (
                  staff.map((e, idx) => (
                    <Tr>
                      <Td>{idx + 1}</Td>
                      <Td>{e.staff_name}</Td>
                      <Td>{e.address}</Td>
                      <Td>{e.phone}</Td>
                    </Tr>
                  ))
                ) : (
                  <div>Not Data Found</div>
                )}
              </Tbody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </>
  );
}

export default Staff;
