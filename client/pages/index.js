import Link from "next/link"

const LandingPage = ({ currentUser, tickets }) => {
  
  return (
    <div>
      <h2>Tickets</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map(ticket => (
            <tr key={ticket.id} >
                <td>{ticket.title}</td>
                <td>{ticket.price}</td>
                <td>
                  <Link href="/tickets/[ticketId]" as={`/tickets/${ticket.id}`}>
                    <a>View</a>
                  </Link>
                </td>
            </tr>
            ))}
        </tbody>
      </table>
    </div>
  )

  return currentUser ? (
    <h1>You are signed in</h1>
  ) : (
    <h1>You are NOT signed in</h1>
  );
};

LandingPage.getInitialProps = async (context, client, currentUser) => {
  const {data} = await client.get('/api/tickets');

  return {
    tickets:data
  }
};

export default LandingPage;
