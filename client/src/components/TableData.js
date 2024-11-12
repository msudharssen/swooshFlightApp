import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  
  const invoices = [
    {
      invoice: "INV001",
      paymentStatus: "Paid",
      totalAmount: "View",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV002",
      paymentStatus: "Pending",
      totalAmount: "View",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV003",
      paymentStatus: "Unpaid",
      totalAmount: "View",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV004",
      paymentStatus: "Paid",
      totalAmount: "View",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV005",
      paymentStatus: "Paid",
      totalAmount: "View",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV006",
      paymentStatus: "Pending",
      totalAmount: "View",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV007",
      paymentStatus: "Unpaid",
      totalAmount: "View",
      paymentMethod: "Credit Card",
    },
  ]
  
  const TableData = function () {
    return (
      <Table className="w-3/5 mx-4" >
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] text-cyan-50">Trip Name</TableHead>
            <TableHead className="text-cyan-50">Departure</TableHead>
            <TableHead className="text-cyan-50">Arrival</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell className="font-medium text-orange-500">{invoice.invoice}</TableCell>
              <TableCell className="text-orange-500">{invoice.paymentStatus}</TableCell>
              <TableCell className="text-orange-500">{invoice.paymentMethod}</TableCell>
              <TableCell className="text-right text-orange-500">{invoice.totalAmount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    )
  }

  export default TableData;
  /*

  1. Afer Login - Show a message saying Hi, Username!, Search Bar with save button!
  2. user can click a button which shows this table. 
  3. Once they go to search tab, and click save, the planes flight info gets saved to this table. 
  */