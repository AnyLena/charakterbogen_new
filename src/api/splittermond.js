const SERVER = import.meta.env.VITE_DB;
import axios from "axios";

export const getCharacters = async (
  setLoading,
  setAllData,
  playerId,
  authToken
) => {
  setLoading(true);
  let timeout;
  try {
    const response = await axios.get(`${SERVER}/splittermond/all/${playerId}`, {
      headers: { Authorization: `Bearer ${authToken}` },
    });
    timeout = setTimeout(() => {
      setAllData(response.data);
      setLoading(false);
    }, 500);
  } catch (error) {
    console.log(error.message);
    setLoading(false);
  } finally {
    return () => clearTimeout(timeout);
  }
};

export const getCharacter = async (id, setCharData, authToken, setLoading) => {
  setLoading(true);
  let timeout;
  try {
    const response = await axios.get(`${SERVER}/splittermond/${id}`, {
      headers: { Authorization: `Bearer ${authToken}` },
    });
    timeout = setTimeout(() => {
      setCharData(response.data);
      setLoading(false);
    }, 500);
  } catch (error) {
    console.log(error.message);
    setLoading(false);
  } finally {
    return () => clearTimeout(timeout);
  }
};

export const handleSubmit = async (charData, setMessage) => {
  try {
    const response = await axios.put(`${SERVER}/splittermond`, charData);
    setMessage("Speichern erfolgreich");
  } catch (error) {
    console.log(error.message);
  }
};

export const handleCreate = async (
  playerId,
  begleiter,
  setCharData,
  setAllData
) => {
  try {
    const response = await axios.post(`${SERVER}/splittermond`, {
      id: playerId,
      begleiter,
    });
    setAllData((prev) => [...prev, response.data]);
    if (!begleiter) setCharData(response.data);
  } catch (error) {
    console.log(error.message);
  }
};

export const handleDelete = async (
  id,
  setAllData,
  setCharData,
  setShowDelete
) => {
  console.log(id);
  try {
    await axios.delete(`${SERVER}/splittermond`, {
      data: {
        id,
      },
    });
    setAllData((prevData) =>
      prevData.filter((item) => {
        return item._id !== id;
      })
    );
    if (setCharData !== null) {
      setCharData({});
      setShowDelete(false);
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const addItem = async (
  section,
  charData,
  setCharacter,
  setEditCharacter,
  propertyValues
) => {
  try {
    const response = await axios.put(`${SERVER}/splittermond/addItem`, {
      id: charData._id,
      section,
      propertyValues,
    });
    const newItem =
      response.data[section][Number(response.data[section].length - 1)];
    setCharacter((prev) => ({
      ...prev,
      [section]: [...prev[section], newItem],
    }));
    setEditCharacter((prev) => ({
      ...prev,
      [section]: [...prev[section], newItem],
    }));
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteItem = async (id, itemId, section, setCharacter) => {
  try {
    await axios.put(`${SERVER}/splittermond/deleteItem`, {
      id,
      itemId,
      section,
    });
    setCharacter((prev) => ({
      ...prev,
      [section]: prev[section].filter((item) => item._id !== itemId),
    }));
  } catch (error) {
    console.log(error.message);
  }
};

export const getMondzeichen = async (id, setMondzeichen) => {
  try {
    const response = await axios.get(
      `${SERVER}/splittermond/mondzeichen/${id}`
    );
    setMondzeichen(response.data);
  } catch (error) {
    console.log(error.message);
  }
};

export const activateItem = async (
  charId,
  itemId,
  section,
  subsection,
  newValue,
  setCharacter
) => {
  try {
    const response = await axios.put(`${SERVER}/splittermond/activateItem`, {
      charId,
      itemId,
      section,
      subsection,
      newValue,
    });
    setCharacter((prev) => {
      const newState = { ...prev };
      if (Array.isArray(newState[section])) {
        newState[section] = newState[section].map((item) => {
          if (item._id === itemId) {
            return { ...item, [subsection]: newValue };
          }
          return item;
        });
      }
      return newState;
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const getMeisterschaften = async (fertigkeit, gruppe, setSelection) => {
  try {
    const response = await axios.get(
      `${SERVER}/splittermond/meisterschaft/${gruppe}/${fertigkeit}`
    );
    setSelection(response.data);
  } catch (error) {
    console.log(error.message);
  }
};
