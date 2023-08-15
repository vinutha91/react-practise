import { OrderReport } from "./OrderReport";
import { withFastTrackOrder } from './withFastTrackedOrder'
export const HOCParent = () => {
  const FastOrder: any = withFastTrackOrder(OrderReport);

  const customerA = {
    name: "Company A",
    address: "720 Kennedy Rd",
    total: 1000,
  };
  const customerB = {
    name: "Company B",
    address: "410 Ramsy St",
    total: 1000,
    isEligible: true,
    isFastTracked: false,
  };
  const customerC = {
    name: "Company C",
    address: "123 Abram Ave",
    total: 1010,
    specialDelivery: true,
  };
  return (
    <div className="App">
      <OrderReport customer={customerA} />
      <FastOrder customer={customerB} />
      <OrderReport customer={customerC} />
    </div>
  );
};

