"use client"

import React from "react";
import Form from "../../ui/signalements/form";
import Header from "@/app/dashboard_agent/components/Header";
import LeftMenu from "@/app/dashboard_agent/components/LeftMenu";
import Breadcrumb from "@/app/components/Breadcrumb";
import Footer from "@/app/dashboard_agent/Footer";

const SignalementPage = () => {
  return (
    <>
      <div className="h-screen w-full flex flex-col">
        <Header />
        <div className="flex flex-1 justify-center">
          <div className="flex flex-col justify-center">
          <Breadcrumb/>
            <div className="flex justify-center space-x-8">
                <LeftMenu
                  title="Signalements"
                  links={[
                    { title: "Récemment Consultés", link: "/" },
                    {
                      title: "Liste des signalements",
                      link: "/",
                      links: [
                        { link: "Tous", text: "Tous" },
                        { link: "Non-Consultés", text: "Non-Consultés" },
                        { link: "Consultés", text: "Consultés" },
                      ],
                    },
                    {
                      title: "Status",
                      link: "/",
                    },
                    {
                      title: "Supprimés",
                      link: "/",
                    },
                  ]}
                />
                <Form />
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </>
  );
};

export default SignalementPage;
