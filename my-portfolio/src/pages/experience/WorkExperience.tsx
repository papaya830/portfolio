import { useState } from 'react';
import './WorkExperience.css';
import { roles } from '../../data/experience';

const WorkExperience = () => {
  // Only one role open at a time; Kardium by default
  const [openId, setOpenId] = useState<string | null>('kardium');

  return (
    <div className="roles">
      {roles.map((r) => {
        const open = openId === r.id;
        return (
          <div key={r.id} className={`role-card ${open ? 'open' : ''}`}>
            <button
              type="button"
              className="role-header"
              aria-expanded={open}
              aria-controls={`role-${r.id}`}
              onClick={() => setOpenId(open ? null : r.id)}
            >
              <span className="role-dates">{r.dates}</span>
              <span className="role-main">
                <span className="role-title"><strong>{r.role}</strong> · {r.company}</span>
                <span className="role-oneliner">{r.oneLiner}</span>
              </span>
              <span className="role-toggle" aria-hidden="true">{open ? '−' : '+'}</span>
            </button>

            {open && (
              <div className="role-body" id={`role-${r.id}`}>
                {(r.results || r.tools) && (
                  <div className="role-chips">
                    {r.results?.map((c) => <span key={c} className="chip chip-result">{c}</span>)}
                    {r.tools?.map((c) => <span key={c} className="chip chip-tool">{c}</span>)}
                  </div>
                )}
                <ul>
                  {r.bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default WorkExperience;
