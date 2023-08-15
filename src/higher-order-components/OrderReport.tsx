export const OrderReport = (props: any) => {
  return (
    <div>
      <b>{props.customer.name}</b>
      <hr />
      <span>{props.customer.address}</span>
      <br />
      <span>Orders: {props.customer.total}</span>
      {props.children}
    </div>
  );
};
