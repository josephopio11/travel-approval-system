import prisma from "@/lib/db";
import Image from "next/image";

const FormPage = async () => {
  const person = await prisma.trip.findUnique({
    where: {
      id: 1,
    },
    include: {},
  });

  console.log(person);

  return (
    <table className="h-dvh  text-sm">
      <tbody>
        <tr className="border border-solid border-gray-500 ">
          <td>
            <div className="p-4 print:p-1 flex flex-col gap-8 print:gap-2">
              <div className="flex flex-row" id="DocumentHeader">
                <div className="w-1/5">
                  <Image
                    src={"/assets/logo.png"}
                    alt="School Logo"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="w-full">
                  <h1 className=" text-base font-bold underline uppercase mb-2">
                    BUSINESS TRAVEL APPROVAL FORM
                  </h1>
                  <table className="w-full">
                    <tbody>
                      <tr className="border-y border-gray-500">
                        <td className="border w-fit">Name of Employee</td>
                        <td className="border uppercase font-bold w-auto">
                          Joseph Opio
                        </td>
                        <td className="border w-fit">Date</td>
                        <td className="border font-bold w-auto">27/Sep/2024</td>
                      </tr>
                      <tr className="border-y border-gray-500">
                        <td className="border p-0.5">Designation</td>
                        <td className="border uppercase font-bold w-auto">
                          Computer Science Teacher
                        </td>
                        <td className="border p-0.5">Department/Unit</td>
                        <td className="border uppercase font-bold w-auto">
                          Teaching
                        </td>
                      </tr>
                      <tr className="border-y border-gray-500">
                        <td className="border p-0.5">LPO Reference No.</td>
                        <td className="border uppercase font-bold w-auto">
                          XCL1001
                        </td>
                        <td className="border p-0.5">Travel Mobile No.</td>
                        <td className="border uppercase font-bold w-auto">
                          01133445566
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* <div>some cntent</div> */}
              </div>
              {/* <div id="CoreInfo">
                <table className="w-full">
                  <tbody>
                    <tr className="border-y border-gray-500">
                      <td className="border w-fit">Name of Employee</td>
                      <td className="border uppercase font-bold w-auto">
                        Joseph Opio
                      </td>
                      <td className="border w-fit">Date</td>
                      <td className="border uppercase font-bold w-auto">
                        27th September 2024
                      </td>
                    </tr>
                    <tr className="border-y border-gray-500">
                      <td className="border p-0.5">Designation</td>
                      <td className="border uppercase font-bold w-auto">
                        Computer Science Teacher
                      </td>
                      <td className="border p-0.5">Department/Unit</td>
                      <td className="border uppercase font-bold w-auto">
                        Teaching
                      </td>
                    </tr>
                    <tr className="border-y border-gray-500">
                      <td className="border p-0.5">LPO Reference No.</td>
                      <td className="border uppercase font-bold w-auto">
                        XCL1001
                      </td>
                      <td className="border p-0.5">Travel Mobile No.</td>
                      <td className="border uppercase font-bold w-auto">
                        01133445566
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div> */}
              <div id="Business Itinerary Plan">
                <h2 className="font-bold uppercase mb-1">
                  Business Itinerary Plan
                </h2>
                <table className="w-full">
                  <thead>
                    <tr className="border-y border-gray-500">
                      <th className="w-1/12 border">S No.</th>
                      <th className="border p-0.5">Location</th>
                      <th className="border p-0.5">Business Objectives</th>
                      <th className="border p-0.5">Deliverables</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-y border-gray-500">
                      <td className="border p-0.5">1</td>
                      <td className="border p-0.5"></td>
                      <td className="border p-0.5"></td>
                      <td className="border p-0.5"></td>
                    </tr>
                    <tr className="border-y border-gray-500">
                      <td className="border p-0.5">1</td>
                      <td className="border p-0.5"></td>
                      <td className="border p-0.5"></td>
                      <td className="border p-0.5"></td>
                    </tr>
                    <tr className="border-y border-gray-500">
                      <td className="border p-0.5">1</td>
                      <td className="border p-0.5"></td>
                      <td className="border p-0.5"></td>
                      <td className="border p-0.5"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div id="TravelPlan">
                <h2 className="font-bold  mb-1">
                  <span className="uppercase">Travel Plan</span>{" "}
                  <span className="text-sm italic">
                    (estimated expenditure to include hotel, local transport,
                    food expenses, etc)
                  </span>
                </h2>

                <table className="w-full">
                  <thead>
                    <tr className="border-y border-gray-500">
                      <th className="border p-0.5">S No.</th>
                      <th className="border p-0.5">From</th>
                      <th className="border p-0.5">To</th>
                      <th className="border p-0.5">Place</th>
                      <th className="border p-0.5">Hotel Name</th>
                      <th className="border p-0.5">Hotel Tel No.</th>
                      <th className="border p-0.5">No. of Nights</th>
                      <th className="border text-balance max-w-fit">
                        Est. Daily Expenditure
                      </th>
                      <th className="border text-balance max-w-fit">
                        Est. Total Expenditure
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-y border-gray-500">
                      <td className="border p-0.5">1</td>
                      <td className="border p-0.5">Wed</td>
                      <td className="border p-0.5">Friday</td>
                      <td className="border p-0.5">KL</td>
                      <td className="border p-0.5">Bogan Villa Hotel</td>
                      <td className="border text-center">01136283789</td>
                      <td className="border text-end p-0.5">3D2N</td>
                      <td className="border text-end p-0.5">RM200</td>
                      <td className="border text-end p-0.5">RM200</td>
                    </tr>
                    <tr className="border-y border-gray-500">
                      <td className="border p-0.5">1</td>
                      <td className="border p-0.5">Wed</td>
                      <td className="border p-0.5">Friday</td>
                      <td className="border p-0.5">KL</td>
                      <td className="border p-0.5">Bogan Villa Hotel</td>
                      <td className="border text-center">01136283789</td>
                      <td className="border text-end p-0.5">3D2N</td>
                      <td className="border text-end p-0.5">RM200</td>
                      <td className="border text-end p-0.5">RM200</td>
                    </tr>
                    <tr className="border-y border-gray-500">
                      <td className="border p-0.5">1</td>
                      <td className="border p-0.5">Wed</td>
                      <td className="border p-0.5">Friday</td>
                      <td className="border p-0.5">KL</td>
                      <td className="border p-0.5">Bogan Villa Hotel</td>
                      <td className="border text-center">01136283789</td>
                      <td className="border text-end p-0.5">3D2N</td>
                      <td className="border text-end p-0.5">RM200</td>
                      <td className="border text-end p-0.5">RM200</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan={5}></td>
                      <td className="border font-bold text-end p-0.5">Total</td>
                      <td className="border font-bold text-end p-0.5">9D6N</td>
                      <td className="border font-bold text-end p-0.5">Total</td>
                      <td className="border font-bold text-end p-0.5">
                        RM10000
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
              <div id="VisaSection" className="my-2">
                <table className="w-full">
                  <tbody>
                    <tr className="border-y border-gray-500">
                      <th className="text-left w-fit border">
                        Visa Requirements
                      </th>
                      <td className="border p-0.5">Is Visa Required</td>
                      <th className="text-right border">Visa Cost</th>
                      <td className="border text-end p-0.5">RM5000</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="flex flex-row w-full gap-2">
                <div className="w-2/3">
                  <table className="w-full h-full">
                    <thead>
                      <tr>
                        <th className="border p-0.5">Expenses</th>
                        <th className="border p-0.5">Amount</th>
                        <th className="border p-0.5">Total Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border p-0.5">Local Travel Expenses</td>
                        <td className="border text-end p-0.5">RM300</td>
                        <td className="border text-end p-0.5">RM300</td>
                      </tr>
                      <tr>
                        <td className="border p-0.5">Cost of tickets (RM)</td>
                        <td className="border text-end p-0.5">RM300</td>
                        <td className="border text-end p-0.5">RM300</td>
                      </tr>
                      <tr>
                        <td className="border p-0.5">Others</td>
                        <td className="border text-end p-0.5">RM300</td>
                        <td className="border text-end p-0.5">RM300</td>
                      </tr>
                      <tr>
                        <td className="border p-0.5">Total in (RM)</td>
                        <td className="border text-end p-0.5 p-0.5">RM300</td>
                        <td className="border text-end p-0.5 p-0.5">RM300</td>
                      </tr>
                      <tr>
                        <td className="border p-0.5">
                          Amount Chargeable to the client:
                        </td>
                        <td className="border text-end p-0.5">RM300</td>
                        <td className="border text-end p-0.5">RM300</td>
                      </tr>
                      <tr>
                        <td className="border p-0.5">Amount Budgeted:</td>
                        <td className="border text-end p-0.5">RM300</td>
                        <td className="border text-end p-0.5">RM300</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="w-1/3 flex flex-col">
                  <div>
                    <table className="w-full">
                      <thead>
                        <tr>
                          <th colSpan={2} className="border p-0.5">
                            Travel Trip Advance Requested
                          </th>
                          <th className="border p-0.5">Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td
                            colSpan={2}
                            className="text-end border col-span-2"
                          >
                            RM
                          </td>
                          <td className="text-end border">3000</td>
                        </tr>
                        <tr>
                          <td className="border p-0.5">Other Currency</td>
                          <td className="text-center border">USD</td>
                          <td className="border p-0.5"></td>
                        </tr>
                        <tr>
                          <td
                            colSpan={2}
                            className="text-end border col-span-2 font-bold"
                          >
                            Total in RM
                          </td>
                          <td className="text-end border">3000</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p>&nbsp;</p>
                  <div>
                    <table className="w-full table-auto">
                      <tbody>
                        <tr>
                          <th className="border text-start w-fit">
                            Client name
                          </th>
                          <td className="border w-auto">
                            <div className="w-auto" />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="w-full">
                <table className="w-full">
                  <tbody>
                    <tr>
                      <th rowSpan={2} className="border w-4/12 text-start">
                        Within 14 days of return I will submit to my Line
                        Manager
                      </th>
                      <td className="border p-0.5"></td>
                      <td className="border w-1/12"></td>
                    </tr>
                    <tr>
                      <td className="border p-0.5"></td>
                      <td className="border w-1/12"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="w-full">
                <table className="w-full">
                  <tbody>
                    <tr>
                      <th className="border w-4/12 text-start">
                        Additional information to support this travel request
                      </th>
                      <td className="border p-0.5"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="w-full">
                <table className="w-full">
                  <tbody>
                    <tr>
                      <th className="border text-start">Employee sign</th>
                      <td className="border p-0.5">joseph opio of uganda</td>
                      <th className="border text-start">Date</th>
                      <td className="border p-0.5">28/03/2022</td>
                      <th className="border text-start">
                        Line Manager signature
                      </th>
                      <td className="border p-0.5">joseph opio of uganda</td>
                      <th className="border text-start">Date</th>
                      <td className="border p-0.5">28/03/2022</td>
                    </tr>
                    <tr>
                      <th className="border text-start">
                        Additional Approval as per POE
                      </th>
                      <td className="border p-0.5">joseph opio of uganda</td>
                      <th className="border text-start">Date</th>
                      <td className="border p-0.5">28/03/2022</td>
                      <th className="border text-start">
                        Additional Approval as per POE
                      </th>
                      <td className="border p-0.5">joseph opio of uganda</td>
                      <th className="border text-start">Date</th>
                      <td className="border p-0.5">28/03/2022</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </td>
        </tr>
        <tr className="border border-solid border-gray-500 ">
          <td>
            <h2 className="font-bold uppercase mb-4">
              For Use by Accounts Department
            </h2>
            <div className="w-full flex flex-row gap-2">
              <table className="w-full">
                <tbody>
                  <tr>
                    <th className="border text-start">Amount of advance</th>
                    <td className="border p-0.5">Some content</td>
                  </tr>
                  <tr>
                    <th className="border text-start">Voucher Number</th>
                    <td className="border p-0.5">Some content</td>
                  </tr>
                  <tr>
                    <th className="border text-start">Date</th>
                    <td className="border p-0.5">Some content</td>
                  </tr>
                </tbody>
              </table>
              <table className="w-full">
                <tbody>
                  <tr>
                    <th className="border text-start">Accounts Manager</th>
                    <td className="border p-0.5">Some content</td>
                  </tr>
                  <tr>
                    <th className="border text-start">Sr. Accountant</th>
                    <td className="border p-0.5">Some content</td>
                  </tr>
                  <tr>
                    <th className="border text-start">Director - Finance</th>
                    <td className="border p-0.5">Some content</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default FormPage;
