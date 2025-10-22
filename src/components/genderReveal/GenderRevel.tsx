interface PersonalInfo {
  status: boolean;
  used_credits: number;
  remaining_credits: number;
  expires: number;
  q: string;
  gender: string;
  country: string;
  probability: number;
  name: string;
  total_names: number;
  duration: string;
}


export default function GenderReveal() {
  const [name, setName] = useState("");
  const fetchGenderByName = async (n: string) => {
    return (
      <div>
        GenderReveal
      </div>
    );
  };
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name..."
      />
    </div>
  );
}

// DRY - don't repeat yourself
// KISS - keep it simple stupid
// SOLID
