import { supabase } from "@/app/_lib/supabase";

export async function GET(req, res) {
  try {
    const updateData = { breakfastPrice: 17 };

    const { data, error } = await supabase
      .from("settings")
      .update(updateData)
      .eq("id", "1");

    if (error) {
      throw new Error("Settings could not be loaded");
    }
    return Response.json({});
  } catch (err) {
    return Response.json({ message: "Request Couldn't be sent" });
  }
}
