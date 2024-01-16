import User from "../models/users.js";
import HData from "../models/healthdata.js";

const updateDetails = {
    personal: (req, res) => {
        const id = req.params.id;

        User.updateOne({ _id: id }, { $set: req.body })
            .then(() => {
                res.status(200).json({ message: "Personal Details updated" });
            })
            .catch((err) => {
                res.status(500).json({ message: "Internal server Error" });
            });
    },

    health: (req, res) => {
        const id = req.params.id;

        HData.updateOne({ _id: id }, { $set: req.body })
            .then(() => {
                res.status(200).json({ message: "Health Details Updated" });
            })
            .catch((err) => {
                res.status(500).json({ message: "Internal server Error" });
            });
    },
};

export default updateDetails;
