import Question from "@/components/Forms/Question";
import { getUserById } from "@/lib/actions/user.action";
// import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";

const page = async () => {
  // const { userId } = auth();

  const userId = "123456";

  if (!userId) {
    redirect("/sign-in");
  }

  const monoUser = await getUserById({ userId });

  console.log(monoUser);
  return (
    <div>
      <h1 className="h1-bold text-dark100_light900">Ask a question</h1>

      <div className="mt-9">
        <Question mongoUserId={JSON.stringify(monoUser._id)} />
      </div>
    </div>
  );
};

export default page;
