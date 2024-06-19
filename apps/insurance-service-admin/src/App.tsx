import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { InsurancePolicyList } from "./insurancePolicy/InsurancePolicyList";
import { InsurancePolicyCreate } from "./insurancePolicy/InsurancePolicyCreate";
import { InsurancePolicyEdit } from "./insurancePolicy/InsurancePolicyEdit";
import { InsurancePolicyShow } from "./insurancePolicy/InsurancePolicyShow";
import { CustomerList } from "./customer/CustomerList";
import { CustomerCreate } from "./customer/CustomerCreate";
import { CustomerEdit } from "./customer/CustomerEdit";
import { CustomerShow } from "./customer/CustomerShow";
import { ClaimList } from "./claim/ClaimList";
import { ClaimCreate } from "./claim/ClaimCreate";
import { ClaimEdit } from "./claim/ClaimEdit";
import { ClaimShow } from "./claim/ClaimShow";
import { InsuranceAgentList } from "./insuranceAgent/InsuranceAgentList";
import { InsuranceAgentCreate } from "./insuranceAgent/InsuranceAgentCreate";
import { InsuranceAgentEdit } from "./insuranceAgent/InsuranceAgentEdit";
import { InsuranceAgentShow } from "./insuranceAgent/InsuranceAgentShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"InsuranceService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="InsurancePolicy"
          list={InsurancePolicyList}
          edit={InsurancePolicyEdit}
          create={InsurancePolicyCreate}
          show={InsurancePolicyShow}
        />
        <Resource
          name="Customer"
          list={CustomerList}
          edit={CustomerEdit}
          create={CustomerCreate}
          show={CustomerShow}
        />
        <Resource
          name="Claim"
          list={ClaimList}
          edit={ClaimEdit}
          create={ClaimCreate}
          show={ClaimShow}
        />
        <Resource
          name="InsuranceAgent"
          list={InsuranceAgentList}
          edit={InsuranceAgentEdit}
          create={InsuranceAgentCreate}
          show={InsuranceAgentShow}
        />
      </Admin>
    </div>
  );
};

export default App;
